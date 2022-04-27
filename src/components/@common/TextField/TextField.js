import { ErrorMessage } from "@hookform/error-message";

const TextField = ({
  label,
  error,
  placeholder,
  type = "text",
  inputProps,
}) => {
  return (
    <div className="w-full mt-3">
      <label className="block uppercase text-secondary-400 text-xs font-bold">
        {label}
        <input
          type={type}
          placeholder={placeholder}
          style={{ transition: "all .15s ease" }}
          className="border-0 p-3 placeholder-secondary-200 text-secondary-400 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full mt-2"
          {...inputProps}
        />
      </label>
      <ErrorMessage
        errors={{ [inputProps.name]: error }}
        name={inputProps.name}
        render={({ message }) => (
          <small className="text-red-600">{message}</small>
        )}
      />
    </div>
  );
};

export default TextField;
