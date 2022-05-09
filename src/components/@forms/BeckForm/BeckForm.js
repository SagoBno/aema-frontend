import React from 'react';
import cn from 'classnames';

import NextButton from '../../@common/NextButton';
import FinishButton from '../../@common/FinishButton';
import BackButton from '../../@common/BackButton';
import PossibleAnswers from './PossibleAnswers';

function BeckForm({
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
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="h-full grid grid-rows-questionsWithControls gap-5"
    >
      <div>
        <h2 className="text-xl md:text-2xl font-bold">{question?.name}</h2>
        <p className="text-sm md:text-base text-secondary-300 mt-2 md:mt-3">
          Selecciona una de las opciones con base a como te sientas.
        </p>
      </div>
      <ul
        className={cn(
          'self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg h-full overflow-y-auto p-2',
          {
            'border-2 border-error/50': hasError,
          },
        )}
      >
        <PossibleAnswers
          selectedAnswer={selectedAnswer}
          possibleAnswers={possibleAnswers}
          registeredQuestions={registeredQuestions}
        />
      </ul>
      <div className="flex justify-between">
        {hasPrevious && <BackButton href={previousPage} />}
        {hasNext && <NextButton href={nextPage} disabled={!selectedAnswer} />}
        {!hasNext && <FinishButton disabled={!selectedAnswer} />}
      </div>
    </form>
  );
}

export default BeckForm;
