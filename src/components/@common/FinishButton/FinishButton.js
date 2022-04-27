import cn from "classnames";

const FinishButton = ({ disabled }) => (
  <button
    type="submit"
    className={cn("c_next-step-button", {
      "c_next-step-button--disabled": disabled,
    })}
  >
    Finalizar
  </button>
);

export default FinishButton;
