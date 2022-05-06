/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import routes from '../../config/routes';
import { create } from '../../services/user-answers';
// eslint-disable-next-line import/extensions
import useFormPersist from '../useFormPersist.js';
import { questionsWithAnswersById, questions } from '../../utils/beck';

const useBeckForm = () => {
  const {
    query: { page: urlPage },
    push,
  } = useRouter();
  const page = Number(urlPage) || 1;
  const [questionWithAnswers, setQuestionWithAnswers] = useState();
  const {
    register, handleSubmit, formState, watch, setValue,
  } = useForm();

  const isFirstPage = page === 1;
  const isLastPage = page === questions.enums.length;

  function showUnFilledQuestionError(question) {
    return toast.error((t) => (
      <Link href={`${routes.INVENTORY}?page=${question}`}>
        <a className="underline" onClick={() => toast.dismiss(t.id)}>
          Debes responder la pregunta #
          {question}
          , da click para verla.
        </a>
      </Link>
    ));
  }

  function onSuccess() {
    toast.success((t) => (
      <Link href={routes.HOME}>
        <a className="underline" onClick={() => toast.dismiss(t.id)}>
          Ver resultados.
        </a>
      </Link>
    ));
    return push(routes.TIP);
  }

  function onError({ message }) {
    return toast.error(message);
  }

  useFormPersist('beck-form', { watch, setValue });

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

  const onSubmit = (answerByQuestion) => create({ answers: Object.values(answerByQuestion) })
    .then(onSuccess)
    .catch(onError);

  return [
    {
      errors: formState.errors,
      questionWithAnswers,
      currentPage: page,
      hasPrevious: !isFirstPage,
      hasNext: !isLastPage,
      previousPage: isFirstPage ? '' : `${routes.INVENTORY}?page=${page - 1}`,
      nextPage: isLastPage ? '' : `${routes.INVENTORY}?page=${page + 1}`,
      registeredQuestions: questions?.enums?.reduce(
        (accumulator, { value: { id } }) => {
          accumulator[id] = register(`${id}`, {
            required: true,
          });
          return accumulator;
        },
        {},
      ),
    },
    {
      getAnswerOfQuestion: (question) => watch(`${question}`),
      onSubmit: handleSubmit(onSubmit),
    },
  ];
};

export default useBeckForm;
