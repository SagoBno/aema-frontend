import React from 'react';
import cn from 'classnames';
import { LoaderIcon } from 'react-hot-toast';
import TextField from '../../@common/TextField';
import CheckBox from '../../@common/CheckBox';
import DatePicker from '../../@common/DatePicker';
import Select from '../../@common/Select';

function RegisterForm({
  onSubmit,
  parentFirstNameInput,
  parentLastNameInput,
  parentBirthdayInput,
  emailInput,
  passwordInput,
  childFirstNameInput,
  childLastNameInput,
  genreInput,
  childBirthdayInput,
  privacyPoliciesInput,
  errors,
  isSubmitting,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <TextField
          label="Nombre del Padre"
          type="text"
          placeholder="Nombre del padre"
          error={errors.parentFirstName}
          inputProps={parentFirstNameInput}
        />
        <TextField
          label="Apellido del Padre"
          type="text"
          placeholder="Apellido del padre"
          error={errors.parentLastName}
          inputProps={parentLastNameInput}
        />
      </div>
      <DatePicker
        label="Fecha de nacimiento del padre"
        type="date"
        placeholder="Fecha de nacimiento del padre"
        error={errors.parentBirthday}
        inputProps={parentBirthdayInput}
      />
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
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
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <TextField
          label="Nombre del hijo"
          type="text"
          placeholder="Nombre del hijo"
          error={errors.childFirstName}
          inputProps={childFirstNameInput}
        />
        <TextField
          label="Apellido del hijo"
          type="text"
          placeholder="Apellido del hijo"
          error={errors.childLastName}
          inputProps={childLastNameInput}
        />
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <Select
          label="Pronombre de genero"
          error={errors.genre}
          inputProps={genreInput}
        />
        <DatePicker
          label="Fecha de nacimiento del hijo"
          type="date"
          placeholder="Fecha de nacimiento del hijo"
          error={errors.childBirthday}
          inputProps={childBirthdayInput}
        />
      </div>
      <CheckBox
        label={(
          <div>
            Acepto las&nbsp;
            <button
              // onClick={setShowModal(true)}
              type="button"
              className="underline text-primary-500 visited:text-primary-300"
            >
              políticas de privacidad.
            </button>
          </div>
          )}
        type="checkbox"
        placeholder="Políticas de privacidad."
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
          {isSubmitting ? <LoaderIcon className="mx-auto" /> : 'Regístrate'}
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
