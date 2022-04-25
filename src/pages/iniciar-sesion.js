import routes from "config/routes";
import useUser from "hooks/useUser";
import HappyLogin from "icons/HappyLogin";
import LoginCard from "components/LoginCard";
import useLoginForm from "hooks/forms/useLoginForm";

const LoginPage = () => {
  useUser({ ifLoggedRedirectTo: routes.HOME });
  const [{ errors, isSubmitting, emailInput, passwordInput }, { onSubmit }] =
    useLoginForm();

  return (
    <main className="flex items-center justify-center min-h-[100vh] w-[100vw]">
      <div className="shadow-lg border-0 w-[80vw] min-h-[80vh] mx-auto flex justify-between">
        <section className="w-full flex items-center justify-center bg-general-bg rounded-tl-lg rounded-bl-lg">
          <div className="w-fit">
            <LoginCard
              errors={errors}
              isSubmitting={isSubmitting}
              emailInput={emailInput}
              passwordInput={passwordInput}
              onSubmit={onSubmit}
            />
          </div>
        </section>
        <section className="w-full flex items-center justify-center bg-primary-100 rounded-tr-lg rounded-br-lg">
          <HappyLogin />
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
