import React from 'react';
import BeckForm from '../@forms/BeckForm';
import useBeckForm from '../../hooks/forms/useBeckForm';

function BeckCard() {
  const [
    {
      errors,
      hasNext,
      nextPage,
      hasPrevious,
      currentPage,
      previousPage,
      registeredQuestions,
      questionWithAnswers,
    },
    { onSubmit, getAnswerOfQuestion },
  ] = useBeckForm();

  return (
    <BeckForm
      hasNext={hasNext}
      nextPage={nextPage}
      onSubmit={onSubmit}
      hasPrevious={hasPrevious}
      previousPage={previousPage}
      hasError={errors[currentPage]}
      question={questionWithAnswers?.question}
      registeredQuestions={registeredQuestions}
      possibleAnswers={questionWithAnswers?.answers}
      selectedAnswer={getAnswerOfQuestion(currentPage)}
    />
  );
}

export default BeckCard;
