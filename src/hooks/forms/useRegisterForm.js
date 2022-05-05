import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';

import { signup } from '../../services/auth';

const fields = {
  FIRSTNAME: {
    name: 'firstName',
    validations: {
      required: 'Este campo es requerido.',
    },
  },
  LASTNAME: {
    name: 'lastName',
    validations: {
      required: 'Este campo es requerido.',
    },
  },
  GENRE: {
    name: 'genre',
    validations: {
      required: 'Este campo es requerido',
    },
  },
  EMAIL: {
    name: 'email',
    validations: {
      required: 'Este campo es requerido.',
    },
  },
  birthday: {
    name: 'birthday',
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
  PRIVACYPOLICIES: {
    name: 'privacyPolicies',
    validations: {
      required: 'Este campo es requerido.',
    },
  },
};

const useRegisterForm = () => {
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
    signup(data)
      .then(() => {
        mutate('/auth/register');
        push(query?.prev ?? '/');
      })
      .catch((e) => toast.error(e.message))
      .finally(() => setIsSubmitting(false));
  };

  return [
    {
      errors,
      isSubmitting,
      firstNameInput: register(fields.FIRSTNAME.name, fields.FIRSTNAME.validations),
      lastNameInput: register(fields.LASTNAME.name, fields.LASTNAME.validations),
      emailInput: register(fields.EMAIL.name, fields.EMAIL.validations),
      genreInput: register(fields.GENRE.name, fields.GENRE.validations),
      birthdayInput: register(fields.birthday.name, fields.birthday.validations),
      passwordInput: register(fields.PASSWORD.name, fields.PASSWORD.validations),
      privacyPoliciesInput: register(
        fields.PRIVACYPOLICIES.name,
        fields.PRIVACYPOLICIES.validations,
      ),
    },
    {
      onSubmit: handleSubmit(onSubmit),
    },
  ];
};

export default useRegisterForm;
