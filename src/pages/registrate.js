import React from 'react';

import { signup } from 'services/auth';

import routes from 'config/routes';

import useUser from 'hooks/useUser';
import useProfileForm from 'hooks/forms/useProfileForm';

import AuthCard from 'components/AuthCard';
import ProfileForm from 'components/@forms/ProfileForm';

import HappyLogin from 'illustrations/HappyLogin';

function RegisterPage() {
  useUser({ ifLoggedRedirectTo: routes.HOME });

  const [
    {
      errors,
      isSubmitting,
      registerParentFirstNameInput,
      registerParentLastNameInput,
      registerParentBirthdayInput,
      registerEmailInput,
      registerPasswordInput,
      registerChildFirstNameInput,
      registerChildLastNameInput,
      registerGenreInput,
      registerChildBirthdayInput,
      registerPrivacyPoliciesInput,
    },
    { onSubmit },
  ] = useProfileForm({ onSubmit: signup });

  return (
    <main className="flex items-center justify-center">
      <div className="shadow-lg border-0 w-[80vw] min-h-[80vh] mx-auto grid grid-cols-1 md:grid-cols-2">
        <section className="w-full flex items-center justify-center bg-general-bg rounded-lg md:rounded-tl-lg md:rounded-bl-lg">
          <div className="w-fit">
            <AuthCard
              title="Regístrate"
              content={(
                <ProfileForm
                  errors={errors}
                  isSubmitting={isSubmitting}
                  parentFirstNameInput={registerParentFirstNameInput()}
                  parentLastNameInput={registerParentLastNameInput()}
                  parentBirthdayInput={registerParentBirthdayInput()}
                  emailInput={registerEmailInput()}
                  passwordInput={registerPasswordInput()}
                  childFirstNameInput={registerChildFirstNameInput()}
                  childLastNameInput={registerChildLastNameInput()}
                  genreInput={registerGenreInput()}
                  childBirthdayInput={registerChildBirthdayInput()}
                  privacyPoliciesInput={registerPrivacyPoliciesInput()}
                  onSubmit={onSubmit}
                />
              )}
            />
          </div>
        </section>
        <section className="w-full hidden md:flex md:items-center md:justify-center md:bg-primary-100 md:rounded-tr-lg md:rounded-br-lg">
          <HappyLogin />
        </section>
      </div>
    </main>
  );
}

export default RegisterPage;
