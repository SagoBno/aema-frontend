import React from 'react';
import HappyLogin from '../illustrations/HappyLogin';
import useRegisterForm from '../hooks/forms/useRegisterForm';
import useUser from '../hooks/useUser';
import routes from '../config/routes';
import AuthCard from '../components/AuthCard';
import RegisterForm from '../components/@forms/RegisterForm';

function RegisterPage() {
  useUser({ ifLoggedRedirectTo: routes.HOME });

  const [
    {
      errors,
      isSubmitting,
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
    },
    { onSubmit },
  ] = useRegisterForm();

  return (
    <main className="flex items-center justify-center">
      <div className="shadow-lg border-0 w-[80vw] min-h-[80vh] mx-auto grid grid-cols-1 md:grid-cols-2">
        <section className="w-full flex items-center justify-center bg-general-bg rounded-lg md:rounded-tl-lg md:rounded-bl-lg">
          <div className="w-fit">
            <AuthCard
              title="Regístrate"
              content={(
                <RegisterForm
                  errors={errors}
                  isSubmitting={isSubmitting}
                  parentFirstNameInput={parentFirstNameInput}
                  parentLastNameInput={parentLastNameInput}
                  parentBirthdayInput={parentBirthdayInput}
                  emailInput={emailInput}
                  passwordInput={passwordInput}
                  childFirstNameInput={childFirstNameInput}
                  childLastNameInput={childLastNameInput}
                  genreInput={genreInput}
                  childBirthdayInput={childBirthdayInput}
                  privacyPoliciesInput={privacyPoliciesInput}
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
