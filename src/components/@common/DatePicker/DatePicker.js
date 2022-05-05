import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

function TextField({
  label,
  error,
  placeholder,
  type = 'date',
  inputProps,
}) {
  return (
    <div className="w-full mt-3">
      <label className="block uppercase text-secondary-400 text-xs font-bold">
        {label}
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
        </div>
        <input
          type={type}
          className="border-0 p-3 placeholder-secondary-200 text-secondary-100 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full mt-2 focus:outline-none focus:ring block w-full pl-10 p-2.5"
          placeholder={placeholder}
          {...inputProps}
        />
      </div>
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
