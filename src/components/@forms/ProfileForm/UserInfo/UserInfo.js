import TextField from 'components/@common/TextField';
import DatePicker from 'components/@common/DatePicker';

function UserInfo({
  errors,
  parentFirstNameInput,
  parentLastNameInput,
  parentBirthdayInput,
  emailInput,
  passwordInput,
  onNextPage,
}) {
  return (
    <>
      <p className="text-secondary-400 font-bold text-lg">
        Datos del padre o tutor
      </p>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <TextField
          label="Nombre"
          type="text"
          placeholder="Nombre"
          error={errors.parentFirstName}
          inputProps={parentFirstNameInput}
        />
        <TextField
          label="Apellido"
          type="text"
          placeholder="Apellido"
          error={errors.parentLastName}
          inputProps={parentLastNameInput}
        />
      </div>
      <DatePicker
        label="Fecha de nacimiento"
        type="date"
        placeholder="Fecha de nacimiento"
        error={errors.parentBirthday}
        inputProps={parentBirthdayInput}
      />
      {emailInput && (
        <TextField
          label="Correo electrónico"
          type="email"
          placeholder="Correo electrónico"
          error={errors.email}
          inputProps={emailInput}
        />
      )}
      {passwordInput && (
        <TextField
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          error={errors.password}
          inputProps={passwordInput}
        />
      )}
      <div className="text-center mt-6 md:grid md:grid-cols-2 md:gap-5">
        <button
          className="c_next-step-button w-full col-start-2"
          type="button"
          onClick={onNextPage}
        >
          Siguiente
        </button>
      </div>
    </>
  );
}

export default UserInfo;
