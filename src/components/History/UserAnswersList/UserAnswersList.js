import routes from 'config/routes';
import Tip from 'icons/Tip';
import Image from 'next/image';
import Link from 'next/link';
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
        <Link href={`${routes.TIP}?date=${userAnswers[0]?.createdAt}`}>
          <a className="ml-2">
            <Tip />
          </a>
        </Link>
      </p>
      <ul className="h-[calc(100%-60px)] overflow-y-auto">
        {userAnswers.map((userAnswer) => (
          <li key={userAnswer.id} className="border-b p-4 grid grid-cols-4 md:grid-cols-7 w-full">
            <div className="max-w-[70px] mx-auto flex items-center">
              <Image
                alt={userAnswer.answer}
                src={`/img/beck/P${userAnswer.questionId}/${userAnswer.answerId}.png`}
                height={120}
                width={120}
                className="max-w-[100px]"
              />
            </div>
            <div className="ml-6 col-span-3 md:col-span-6">
              <p>{userAnswer.question}</p>
              <p className="text-secondary-300 font-light">{userAnswer.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserAnswersList;
