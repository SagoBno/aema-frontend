import cn from "classnames";
import Answer from "./Answer";

const PossibleAnswers = ({
  possibleAnswers,
  selectedAnswer,
  registeredQuestions,
}) =>
  possibleAnswers?.map(({ id, name, question }, index) => {
    const { onChange, ref } = registeredQuestions[question];
    return (
      <Answer
        ref={ref}
        id={id}
        name={name}
        onChange={onChange}
        question={question}
        answer={possibleAnswers?.[index]}
        isSelected={selectedAnswer?.id === id}
      />
    );
  });

export default PossibleAnswers;
