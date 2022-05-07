import React from 'react';
import HappyLogin from '../illustrations/HappyLogin';
import useLoginForm from '../hooks/forms/useLoginForm';
import useUser from '../hooks/useUser';
import routes from '../config/routes';
import AuthCard from '../components/AuthCard';
import LoginForm from '../components/@forms/LoginForm';

function LoginPage() {
  useUser({ ifLoggedRedirectTo: routes.HOME });

  const [{
    errors, isSubmitting, emailInput, passwordInput,
  }, { onSubmit }] = useLoginForm();

  return (
    <main className="flex items-center justify-center h-full">
      <div className="shadow-lg border-0 w-[80vw] min-h-[80vh] mx-auto grid grid-cols-1 md:grid-cols-2">
        <section className="w-full flex items-center justify-center bg-general-bg rounded-lg md:rounded-tl-lg md:rounded-bl-lg">
          <div className="w-fit">
            <AuthCard
              title="Iniciar sesión ✌️"
              content={(
                <LoginForm
                  errors={errors}
                  isSubmitting={isSubmitting}
                  emailInput={emailInput}
                  passwordInput={passwordInput}
                  onSubmit={onSubmit}
                />
              )}
              isLogin
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

export default LoginPage;
