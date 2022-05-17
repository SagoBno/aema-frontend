import { useState } from 'react';
import cn from 'classnames';
import { LoaderIcon } from 'react-hot-toast';

import Select from 'components/@common/Select';
import CheckBox from 'components/@common/CheckBox';
import TextField from 'components/@common/TextField';
import DatePicker from 'components/@common/DatePicker';
import Modal from 'components/@common/Modal';
import PrivacyPolicies from 'components/PrivacyPolicies';

function ChildInfo({
  errors,
  childFirstNameInput,
  childLastNameInput,
  genreInput,
  childBirthdayInput,
  privacyPoliciesInput,
  isSubmitting,
  onPreviousPage,
  isEditing = false,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
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
      <Select
        label="Pronombre de genero"
        error={errors.genre}
        inputProps={genreInput}
      />
      <DatePicker
        label="Fecha de nacimiento"
        type="date"
        placeholder="Fecha de nacimiento"
        error={errors.childBirthday}
        inputProps={childBirthdayInput}
      />

      <CheckBox
        label={(
          <div>
            Acepto las&nbsp;
            <button
              onClick={() => setShowModal(true)}
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
      <div className="text-center mt-6 grid grid-cols-2 gap-5">
        <button
          className="c_previous-step-button w-full"
          type="button"
          onClick={onPreviousPage}
        >
          Anterior
        </button>
        <button
          className={cn('c_primary-button w-full', {
            'c_primary-button--disabled': isSubmitting,
          })}
          type="submit"
        >
          {isSubmitting && <LoaderIcon className="mr-2" />}
          {isEditing ? 'Guardar' : 'Regístrate'}
        </button>
      </div>
      {showModal ? (
        <Modal
          title="Políticas de Privacidad"
          setShowModal={setShowModal}
          body={<PrivacyPolicies />}
          footer={(
            <button
              className="text-error font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </button>
          )}
        />
      ) : null}
    </>
  );
}

export default ChildInfo;
