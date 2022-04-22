import cn from "classnames";
import { useRouter } from "next/router";
import { LoaderIcon } from "react-hot-toast";

import useUser from "../../hooks/useUser";

const LoginForm = ({
  onSubmit,
  emailInput,
  passwordInput,
  errors,
  isSubmitting,
}) => {
  const user = useUser();
  const { push } = useRouter();
  if(user) {
    return push("/");
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="w-full mt-3">
        <label className="block uppercase text-secondary-400 text-xs font-bold">
          Correo electrónico
          <input
            type="email"
            className="border-0 p-3 placeholder-secondary-200 text-secondary-400 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full mt-2"
            placeholder="Correo electrónico"
            style={{ transition: "all .15s ease" }}
            {...emailInput}
          />
        </label>
        {errors.email && (
          <small className="text-secondary-100">This field is required</small>
        )}
      </div>

      <div className="w-full mt-3">
        <label
          className="block uppercase text-secondary-400 text-xs font-bold"
          htmlFor="grid-password"
        >
          Contraseña
          <input
            type="password"
            className="border-0 p-3 placeholder-secondary-200 text-secondary-400 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full mt-2"
            placeholder="Contraseña"
            style={{ transition: "all .15s ease" }}
            {...passwordInput}
          />
        </label>
        {errors.password && (
          <small className="text-secondary-100">This field is required</small>
        )}
      </div>

      <div className="text-center mt-6">
        <button
          className={cn(
            "bg-primary-400 text-white text-sm font-bold uppercase px-6 py-3 rounded-full shadow outline-none focus:outline-none w-full",
            {
              "pointer-events-auto cursor-not-allowed": isSubmitting,
              "active:bg-secondary-400 hover:shadow-lg": !isSubmitting,
            }
          )}
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
