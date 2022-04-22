import LoginForm from "../LoginForm";

const LoginCard = ({ onSubmit, isSubmitting, emailInput, passwordInput, errors }) => {
  return (
    <div className="w-full px-4 lg:px-10 py-10">
      <p className="text-secondary-400 mb-3 font-bold text-2xl">Login ✌️</p>
      <div className="mt-6">
        <LoginForm
          errors={errors}
          isSubmitting={isSubmitting}
          emailInput={emailInput}
          passwordInput={passwordInput}
          onSubmit={onSubmit}
        />
      </div>
      <div className="flex text-xs w-full mt-10">
        <a href="/" className="text-secondary-100 w-1/2">
          <p>Forgot password?</p>
        </a>
        <a href="/" className="text-secondary-100 w-1/2">
          <p className="text-right">Create new account</p>
        </a>
      </div>
    </div>
  );
};

export default LoginCard;
