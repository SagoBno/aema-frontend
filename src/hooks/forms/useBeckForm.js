import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import routes from "config/routes";
import { create } from "services/beck";
import useFormPersist from "hooks/useFormPersist.js";
import { questionsWithAnswersById, questions } from "utils/beck";

const useBeckForm = () => {
  const {
    query: { page: urlPage },
  } = useRouter();
  const page = Number(urlPage) || 1;
  const [questionWithAnswers, setQuestionWithAnswers] = useState();
  const { register, handleSubmit, formState, watch, setValue } = useForm();

  const isFirstPage = page === 1;
  const isLastPage = page === questions.enums.length;

  useFormPersist("beck-form", { watch, setValue });

  useEffect(() => {
    const newQuestionWithAnswer = questionsWithAnswersById[page];

    setQuestionWithAnswers(newQuestionWithAnswer);
  }, [page]);

  useEffect(() => {
    let toastId;
    const questionsWithError = Object.keys(formState.errors);
    const questionWithError = Number(questionsWithError[0]);
    const currentErrorIsNotFromCurrentQuestion = page !== questionWithError;
    if (questionsWithError.length && currentErrorIsNotFromCurrentQuestion) {
      toastId = showUnFilledQuestionError(questionWithError);
    }
    return () => {
      if (toastId) {
        toast.remove(toastId);
      }
    };
  }, [formState]);

  const onSubmit = (answerByQuestion) =>
    create({ questions: Object.values(answerByQuestion) })
      .then(showBeckCreatedSuccessfullyNotification)
      .catch(showNotCreatedBeckError);

  return [
    {
      errors: formState.errors,
      questionWithAnswers,
      currentPage: page,
      hasPrevious: !isFirstPage,
      hasNext: !isLastPage,
      previousPage: isFirstPage ? "" : `${routes.BECK}?page=${page - 1}`,
      nextPage: isLastPage ? "" : `${routes.BECK}?page=${page + 1}`,
      registeredQuestions: questions?.enums?.reduce(
        (accumulator, { value: { id } }) => {
          accumulator[id] = register(`${id}`, {
            required: true,
          });
          return accumulator;
        },
        {}
      ),
    },
    {
      getAnswerOfQuestion: (question) => watch(`${question}`),
      onSubmit: handleSubmit(onSubmit),
    },
  ];
};

function showUnFilledQuestionError(question) {
  return toast.error((t) => (
    <Link href={`${routes.BECK}?page=${question}`}>
      <a className="underline" onClick={() => toast.dismiss(t.id)}>
        Debes responder la pregunta #{question}, da click para verla.
      </a>
    </Link>
  ));
}

function showBeckCreatedSuccessfullyNotification() {
  return toast.success((t) => (
    <Link href={routes.BECK}>
      <a className="underline" onClick={() => toast.dismiss(t.id)}>
        Ver resultados.
      </a>
    </Link>
  ));
}

function showNotCreatedBeckError({ message }) {
  return toast.error(message);
}

export default useBeckForm;
