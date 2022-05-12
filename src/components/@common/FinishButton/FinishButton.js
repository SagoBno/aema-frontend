import React from 'react';
import cn from 'classnames';

function FinishButton({ disabled }) {
  return (
    <button
      type="submit"
      className={cn('c_primary-button', {
        'c_primary-button--disabled': disabled,
      })}
    >
      Finalizar
    </button>
  );
}

export default FinishButton;
