import { useState } from 'react';

import { formatDate } from '../../utils/dates';
import { getCsvExporter } from '../../utils/csv';
import { answersById, questionsById } from '../../utils/beck';

const csvHeaders = ['Id', 'Fecha', 'Pregunta', 'Respuesta', 'Valor'];

const DEFAULT_HISTORY = {};

const useHistory = ({ userAnswers }) => {
  const [selectedReport, setSelectedReport] = useState();

  const onSelectReport = (reportKey) => {
    const isSelected = selectedReport === reportKey;
    return setSelectedReport(() => (isSelected ? null : reportKey));
  };

  const history = userAnswers?.reduce((accumulator, current) => {
    const answer = answersById[current.answerId];
    const question = questionsById[answer.question];
    const date = formatDate(current.createdAt);
    if (!accumulator[date]) {
      accumulator[date] = [];
    }

    accumulator[date].push({
      id: current.id,
      date,
      question: question.name,
      questionId: question.id,
      answer: answer.name,
      answerId: answer.id,
      value: answer.value,
      createdAt: current.createdAt,
    });

    return accumulator;
  }, {}) ?? DEFAULT_HISTORY;

  const onDownloadUserAnswers = () => getCsvExporter({
    filename: selectedReport,
    title: `Aquí tienes tus respuestas del ${selectedReport}.`,
    headers: csvHeaders,
  }).generateCsv(
    Object.values(history[selectedReport]).map(
      ({
        id, date, question, answer, value,
      }) => ({
        id,
        date,
        question,
        answer,
        value,
      }),
    ),
  );

  const onDownloadHistory = () => getCsvExporter({
    filename: 'historial',
    title: 'Aquí tienes tu historial de respuestas.',
    headers: csvHeaders,
  }).generateCsv(
    Object.values(history)
      .flat()
      .map(({
        id, date, question, answer, value,
      }) => ({
        id,
        date,
        question,
        answer,
        value,
      })),
  );

  return [
    {
      history,
      reports: Object.keys(history),
      selectedReport,
    },
    { onSelectReport, onDownloadUserAnswers, onDownloadHistory },
  ];
};

export default useHistory;
