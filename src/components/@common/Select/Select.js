import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

function TextField({
  label,
  error,
  inputProps,
}) {
  return (
    <div className="w-full mt-3">
      <label className="block uppercase text-secondary-400 text-xs font-bold">
        {label}
      </label>
      <select
        className="border-0 p-3 placeholder-secondary-200 text-secondary-100 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full mt-2 focus:outline-none focus:ring"
        {...inputProps}
      >
        <option value="Masculino">El</option>
        <option value="Femenino">Ella</option>
        <option value="Otro">Elle</option>
      </select>
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
