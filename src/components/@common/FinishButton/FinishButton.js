import React from 'react';
import cn from 'classnames';

function FinishButton({ disabled }) {
  return (
    <button
      type="submit"
      className={cn('c_next-step-button', {
        'c_next-step-button--disabled': disabled,
      })}
    >
      Finalizar
    </button>
  );
}

export default FinishButton;
