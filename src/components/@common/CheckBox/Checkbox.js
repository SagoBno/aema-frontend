import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

function TextField({
  label,
  error,
  type = 'checkbox',
  inputProps,
}) {
  return (
    <div className="w-full mt-3">
      <label>
        <input
          type={type}
          className="form-check-input appearance-none h-4 w-4 border border-secondary-200 rounded-sm bg-general-bg checked:bg-primary-500 checked:border-primary-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          {...inputProps}
        />
        <span className="form-check-label inline-block text-secondary-200 font-light">{label}</span>
      </label>
      <ErrorMessage
        errors={{ [inputProps.name]: error }}
        name={inputProps.name}
        render={({ message }) => (
          <small className="text-error block">{message}</small>
        )}
      />
    </div>
  );
}

export default TextField;
