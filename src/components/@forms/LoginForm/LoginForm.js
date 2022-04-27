import cn from "classnames";
import { LoaderIcon } from "react-hot-toast";

import TextField from "../../@common/TextField";

const LoginForm = ({
  onSubmit,
  emailInput,
  passwordInput,
  errors,
  isSubmitting,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Correo electrónico"
        type="email"
        placeholder="Correo electrónico"
        error={errors.email}
        inputProps={emailInput}
      />
      <TextField
        label="Contraseña"
        type="password"
        placeholder="Contraseña"
        error={errors.password}
        inputProps={passwordInput}
      />

      <div className="text-center mt-6">
        <button
          className={cn("c_primary-button", {
            "c_primary-button--submitting": isSubmitting,
          })}
          type="submit"
          style={{ transition: "all .15s ease" }}
        >
          {isSubmitting ? <LoaderIcon className="mx-auto" /> : "Login"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
