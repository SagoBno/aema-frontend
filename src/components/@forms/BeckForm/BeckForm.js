import React from "react";
import cn from "classnames";
import Link from "next/link";

import NextButton from "components/@common/NextButton";
import FinishButton from "components/@common/FinishButton";
import BackButton from "components/@common/BackButton";
import PossibleAnswers from "./PossibleAnswers";

const BeckForm = ({
  onSubmit,
  question,
  possibleAnswers,
  selectedAnswer,
  hasError,
  registeredQuestions,
  previousPage,
  nextPage,
  hasPrevious,
  hasNext,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "bg-general-bg min-h-[86vh] max-w-[90vw] shadow-lg rounded-lg pt-10 pb-5 px-8 flex flex-col justify-between",
        {
          "border-2 border-error/50": hasError,
        }
      )}
    >
      <div>
        <h2 className="text-2xl text-center font-bold">{question?.name}</h2>
        <p className="text-center text-secondary-300 mt-3">
          Selecciona una de las opciones con base a como te sientas.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-auto py-10">
        <PossibleAnswers
          selectedAnswer={selectedAnswer}
          possibleAnswers={possibleAnswers}
          registeredQuestions={registeredQuestions}
        />
      </div>
      <div className="flex justify-between h-[52px]">
        {hasPrevious && <BackButton href={previousPage} />}
        {hasNext && <NextButton href={nextPage} disabled={!selectedAnswer} />}
        {!hasNext && <FinishButton disabled={!selectedAnswer} />}
      </div>
    </form>
  );
};

export default BeckForm;
