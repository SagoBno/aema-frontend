import cn from "classnames";
import Link from "next/link";
import beck from "aema-cross/index";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

import routes from "config/routes";
import useUser from "hooks/useUser";
import { theme } from "../../tailwind.config.js";
import LoggedLayout from "components/layouts/LoggedLayout";
import useFormPersist from "hooks/useFormPersist.js";

const { questions, answers } = beck;

const answersByQuestionId = answers.enums.reduce((acc, { value }) => {
  if (!acc[value.question]) {
    acc[value.question] = [];
  }
  acc[value.question].push(value);
  return acc;
}, {});

const HomePage = () => {
  useUser({ ifNotLoggedRedirectTo: routes.LOGIN });
  const {
    query: { page: urlPage },
  } = useRouter();
  const page = Number(urlPage) || 1;
  const [questionWithAnswers, setQuestionWithAnswers] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const isFirstPage = page === 1;
  const isLastPage = page === questions.enums.length;

  useFormPersist("beck-form", { watch, setValue });

  useEffect(() => {
    const newQuestion = questions.enums[page - 1]?.value;
    const newAnswers = answersByQuestionId[newQuestion.id];
    const sortedAnswers = newAnswers?.sort((a, b) => a.order - b.order);
    setQuestionWithAnswers({ question: newQuestion, answers: sortedAnswers });
  }, [page]);

  return (
    <LoggedLayout>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="bg-general-bg min-h-[86vh] max-w-[90vw] shadow-lg rounded-lg pt-10 pb-5 px-8 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl text-center font-bold">
              {questionWithAnswers?.question?.name}
            </h2>
            <p className="text-center text-secondary-300 mt-3">
              Selecciona una de las opciones con base a como te sientas.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mx-auto py-10">
            {questionWithAnswers?.answers?.map(({ id, name, question }) => {
              const { onChange, ref } = register(`${question}`, {
                required: true,
              });
              return (
                <div
                  ref={ref}
                  key={id}
                  className={cn(
                    "text-center shadow rounded-lg p-5 cursor-pointer border-2 border-transparent border-solid",
                    {
                      "border-2 border-primary-400 border-solid":
                        watch(`${question}`) === id,
                    }
                  )}
                  onClick={() => {
                    onChange({
                      target: {
                        name: `${question}`,
                        value: id,
                      },
                    });
                  }}
                >
                  <img
                    alt={name}
                    src={`/img/beck/P${question}/${id}.png`}
                    className="mx-auto"
                  />
                  <p className="text-secondary-400 mt-5">{name}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between h-[52px]">
            {!isFirstPage && (
              <Link href={`${routes.HOME}?page=${page - 1}`}>
                <a className="c_previous-step-button">Volver</a>
              </Link>
            )}
            {isLastPage ? (
              <button
                type="submit"
                className={cn("c_next-step-button", {
                  "c_next-step-button--disabled": !watch(`${page}`),
                })}
              >
                Finalizar
              </button>
            ) : (
              <Link href={`${routes.HOME}?page=${page + 1}`}>
                <a
                  className={cn("c_next-step-button ml-auto", {
                    "c_next-step-button--disabled": !watch(`${page}`),
                  })}
                >
                  Siguiente
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="37"
                      cy="37"
                      r="35.5"
                      stroke={theme.extend.colors.secondary[0](100)}
                      strokeWidth="3"
                    ></circle>
                    <path
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                      fill={theme.extend.colors.secondary[0](100)}
                    ></path>
                  </svg>
                </a>
              </Link>
            )}
          </div>
        </form>
      </div>
    </LoggedLayout>
  );
};

export default HomePage;
