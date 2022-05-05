import React from 'react';
import cn from 'classnames';
import { LoaderIcon } from 'react-hot-toast';
import TextField from '../../@common/TextField';
import CheckBox from '../../@common/CheckBox';
import DatePicker from '../../@common/DatePicker';
import Select from '../../@common/Select';

function RegisterForm({
  onSubmit,
  firstNameInput,
  lastNameInput,
  emailInput,
  genreInput,
  birthdayInput,
  passwordInput,
  privacyPoliciesInput,
  errors,
  isSubmitting,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <TextField
          label="Nombre"
          type="text"
          placeholder="Nombre"
          error={errors.firstName}
          inputProps={firstNameInput}
        />
        <TextField
          label="Apellido"
          type="text"
          placeholder="Apellido"
          error={errors.lastName}
          inputProps={lastNameInput}
        />
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <Select
          label="Pronombre de genero"
          error={errors.genre}
          inputProps={genreInput}
        />
        <DatePicker
          label="Fecha de nacimiento"
          type="date"
          placeholder="Fecha de nacimiento"
          error={errors.date}
          inputProps={birthdayInput}
        />
      </div>
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
      <CheckBox
        label={(
          <div>
            Acepto las&nbsp;
            <button
              // onClick={setShowModal(true)}
              type="button"
              className="underline text-primary-500 visited:text-primary-300"
            >
              politicas de privacidad
            </button>
          </div>
          )}
        type="checkbox"
        placeholder="Politicas de privacidad"
        error={errors.privacyPolicies}
        inputProps={privacyPoliciesInput}
      />

      <div className="text-center mt-6">
        <button
          className={cn('c_primary-button', {
            'c_primary-button--submitting': isSubmitting,
          })}
          type="submit"
          style={{ transition: 'all .15s ease' }}
        >
          {isSubmitting ? <LoaderIcon className="mx-auto" /> : 'Register'}
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
