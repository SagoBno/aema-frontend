import Link from "next/link";
import LoginForm from "../@forms/LoginForm";

const LoginCard = ({
  onSubmit,
  isSubmitting,
  emailInput,
  passwordInput,
  errors,
}) => {
  return (
    <div className="w-full px-4 lg:px-10 py-10">
      <p className="text-secondary-400 mb-3 font-bold text-2xl">
        Iniciar sesión ✌️
      </p>
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
        <Link href="/">
          <a className="text-secondary-100 w-1/2">¿Olvidaste tu contraseña?</a>
        </Link>
        <Link href="/registrarse">
          <a className="text-right text-secondary-100 w-1/2">Crear cuenta</a>
        </Link>
      </div>
    </div>
  );
};

export default LoginCard;
