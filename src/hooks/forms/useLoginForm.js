import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';

import { login } from '../../services/auth';

const fields = {
  EMAIL: {
    name: 'email',
    validations: {
      required: 'Este campo es requerido.',
    },
  },
  PASSWORD: {
    name: 'password',
    validations: {
      required: 'Este campo es requerido.',
    },
  },
};

const useLoginForm = () => {
  const { push, query } = useRouter();
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    login(data)
      .then(() => {
        mutate('/auth/login');
        push(query?.prev ?? '/');
      })
      .catch((e) => toast.error(e.message))
      .finally(() => setIsSubmitting(false));
  };

  return [
    {
      errors,
      isSubmitting,
      emailInput: register(fields.EMAIL.name, fields.EMAIL.validations),
      passwordInput: register(
        fields.PASSWORD.name,
        fields.PASSWORD.validations,
      ),
    },
    {
      onSubmit: handleSubmit(onSubmit),
    },
  ];
};

export default useLoginForm;
