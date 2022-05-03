import { useState } from "react";

import { formatDate } from "utils/dates";
import { getCsvExporter } from "utils/csv";
import { answersById, questionsById } from "utils/beck";

const csvHeaders = ["Id", "Fecha", "Pregunta", "Respuesta"];

const useHistory = ({ userAnswers }) => {
  const [selectedRecord, setSelectedRecord] = useState();

  const onSelectRecord = (recordKey) => {
    const isSelected = selectedRecord === recordKey;
    return setSelectedRecord(() => (isSelected ? null : recordKey));
  };

  const history =
    userAnswers?.reduce((accumulator, current) => {
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
        answer: answer.name,
      });

      return accumulator;
    }, {}) || {};

  const onDownloadUserAnswers = () =>
    getCsvExporter({
      filename: selectedRecord,
      title: `Aquí tienes tus respuestas del ${selectedRecord}.`,
      headers: csvHeaders,
    }).generateCsv(Object.values(history[selectedRecord]));

  const onDownloadHistory = () =>
    getCsvExporter({
      filename: "historial",
      title: "Aquí tienes tu historial de respuestas.",
      headers: csvHeaders,
    }).generateCsv(Object.values(history).flat());

  return [
    { history, selectedRecord },
    { onSelectRecord, onDownloadUserAnswers, onDownloadHistory },
  ];
};

export default useHistory;
