import HappyLogin from "../icons/HappyLogin";
import LoginCard from "../components/LoginCard";
import useLoginForm from "../hooks/useLoginForm";

const LoginPage = () => {
  const [{ errors, isSubmitting, emailInput, passwordInput }, { onSubmit }] =
    useLoginForm();
  return (
    <main className="flex items-center justify-center h-[100vh] w-[100vw] bg-secondary-100">
      <div className="shadow-lg border-0 w-[80vw] h-[80vh] mx-auto flex justify-between">
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
