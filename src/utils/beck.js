import beck from "aema-cross/index";

const { questions, answers } = beck;

export const answersById = answers.enums.reduce((accumulator, { value }) => {
  accumulator[value.id] = value;
  return accumulator;
}, {});

export const questionsById = questions.enums.reduce(
  (accumulator, { value }) => {
    accumulator[value.id] = value;
    return accumulator;
  },
  {}
);

export const answersByQuestionId = answers.enums.reduce(
  (accumulator, { value }) => {
    if (!accumulator[value.question]) {
      accumulator[value.question] = [];
    }
    accumulator[value.question].push(value);

    if ([5, 7].includes(accumulator[value.question].length)) {
      accumulator[value.question] = accumulator[value.question]?.sort(
        (a, b) => a.order - b.order
      );
    }
    return accumulator;
  },
  {}
);

export const questionsWithAnswersById = questions.enums.reduce(
  (accumulator, { value }) => {
    accumulator[value.id] = {
      question: value,
      answers: answersByQuestionId[value.id],
    };

    return accumulator;
  },
  {}
);

export { questions, answers };
