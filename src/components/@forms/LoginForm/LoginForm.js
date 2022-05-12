import React from 'react';
import cn from 'classnames';
import { LoaderIcon } from 'react-hot-toast';

import TextField from '../../@common/TextField';

function LoginForm({
  onSubmit,
  emailInput,
  passwordInput,
  errors,
  isSubmitting,
}) {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Correo electrónico"
        type="email"
        placeholder="Correo electrónico"
        error={errors.email}
        inputProps={emailInput}
      />
      <TextField
        label="Contraseña"
        type="password"
        placeholder="Contraseña"
        error={errors.password}
        inputProps={passwordInput}
      />

      <div className="text-center mt-6">
        <button
          className={cn('c_primary-button w-full', {
            'c_primary-button--disabled': isSubmitting,
          })}
          type="submit"
        >
          {isSubmitting ? <LoaderIcon className="mx-auto py-2" /> : 'Iniciar sesión'}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
