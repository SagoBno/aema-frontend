import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

function TextField({
  label,
  error,
  placeholder,
  type = 'text',
  inputProps,
}) {
  return (
    <div className="w-full mt-3">
      <label className="block text-secondary-400 text-xs font-bold">
        {label}
        <input
          type={type}
          placeholder={placeholder}
          className="border-0 p-3 placeholder-secondary-200 text-secondary-400 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full mt-2"
          {...inputProps}
        />
      </label>
      <ErrorMessage
        errors={{ [inputProps.name]: error }}
        name={inputProps.name}
        render={({ message }) => (
          <small className="text-red-600">{message}</small>
        )}
      />
    </div>
  );
}

export default TextField;
