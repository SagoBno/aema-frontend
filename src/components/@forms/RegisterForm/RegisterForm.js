import { useState, useEffect } from 'react';
import ChildInfo from './ChildInfo/ChildInfo';

import UserInfo from './UserInfo';

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
  const [page, setPage] = useState(1);

  const sendToPageIfErros = () => {
    const firstPageHasError = [
      errors.parentFirstName,
      errors.parentLastName,
      errors.parentBirthday,
      errors.email,
      errors.password,
    ].some((e) => !!e);

    if (firstPageHasError) {
      setPage(1);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        sendToPageIfErros();
        onSubmit(e);
      }}
    >
      {page === 1 ? (
        <UserInfo
          errors={errors}
          parentFirstNameInput={parentFirstNameInput}
          parentLastNameInput={parentLastNameInput}
          parentBirthdayInput={parentBirthdayInput}
          emailInput={emailInput}
          passwordInput={passwordInput}
          onNextPage={() => setPage((prevPage) => prevPage + 1)}
        />
      ) : (
        <ChildInfo
          errors={errors}
          childFirstNameInput={childFirstNameInput}
          childLastNameInput={childLastNameInput}
          genreInput={genreInput}
          childBirthdayInput={childBirthdayInput}
          privacyPoliciesInput={privacyPoliciesInput}
          isSubmitting={isSubmitting}
          onPreviousPage={() => setPage((prevPage) => prevPage - 1)}
        />
      )}
    </form>
  );
}

export default RegisterForm;
