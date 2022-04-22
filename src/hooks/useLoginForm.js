import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { login } from "services/auth";

const useLoginForm = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    login(data)
      .then(() => push("/"))
      .catch((e) => toast.error(e.message))
      .finally(() => setIsSubmitting(false));
  };

  return [
    {
      errors,
      isSubmitting,
      emailInput: register("email", { required: true }),
      passwordInput: register("password", { required: true }),
    },
    {
      onSubmit: handleSubmit(onSubmit),
    },
  ];
};

export default useLoginForm;
