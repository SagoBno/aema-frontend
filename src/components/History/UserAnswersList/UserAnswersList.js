import React from 'react';
import Download from '../../../icons/Download';

function UserAnswersList({ onDownloadUserAnswers, userAnswers = [] }) {
  return (
    <>
      <p className="font-bold text-lg p-4 flex items-center">
        Respuestas por pregunta
        <button type="button" title="Descargar respuestas" onClick={onDownloadUserAnswers}>
          <Download className="ml-2 cursor-pointer" />
        </button>
      </p>
      <ul className="w-fit h-full overflow-y-auto">
        {userAnswers.map((userAnswer) => (
          <li key={userAnswer.id} className="border-b p-4">
            <p>{userAnswer.question}</p>
            <p className="text-secondary-300 font-light">{userAnswer.answer}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserAnswersList;
