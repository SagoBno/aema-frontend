import { useState } from 'react';

import UserInfo from './UserInfo';
import ChildInfo from './ChildInfo';

function ProfileForm({
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
  isEditing = false,
}) {
  const [page, setPage] = useState(1);

  const sendToPageIfErrors = () => {
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
        sendToPageIfErrors();
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
          isEditing={isEditing}
        />
      )}
    </form>
  );
}

export default ProfileForm;
