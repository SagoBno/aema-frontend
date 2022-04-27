import BeckForm from "components/@forms/BeckForm";
import useBeckForm from "hooks/forms/useBeckForm";

const BeckCard = () => {
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
    <div className="flex items-center justify-center">
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
    </div>
  );
};

export default BeckCard;
