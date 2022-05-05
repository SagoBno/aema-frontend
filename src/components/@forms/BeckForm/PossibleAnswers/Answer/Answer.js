/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef } from 'react';

import cn from 'classnames';
import Image from 'next/image';

const Answer = forwardRef(
  ({
    id, isSelected, onChange, name, answer, question,
  }, ref) => (
    <li
      ref={ref}
      key={id}
      className={cn(
        'text-center shadow rounded-lg p-5 cursor-pointer border-2 border-transparent border-solid',
        {
          'border-2 border-primary-500 border-solid': isSelected,
        },
      )}
      onClick={() => {
        onChange({
          target: {
            name: `${question}`,
            value: answer,
          },
        });
      }}
    >
      <Image
        alt={name}
        src={`/img/beck/P${question}/${id}.png`}
        className="mx-auto"
        height={128}
        width={128}
      />
      <p className="text-secondary-400 mt-5">{name}</p>
    </li>
  ),
);

export default Answer;
