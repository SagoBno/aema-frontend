import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import dayjs from 'dayjs';

import { signup } from '../../services/auth';

// eslint-disable-next-line no-unused-vars
const checkAge = (birthdayParam) => {
  const hola = dayjs.utc(birthdayParam).diff(dayjs.utc(new Date()), 'year');
  console.log(hola);
  return hola > 18;
};

const fields = {
  PARENTFIRSTNAME: {
    name: 'parentFirstName',
    validations: {
      required: 'Este campo es requerido.',
    },
  },
  PARENTLASTNAME: {
    name: 'parentLastName',
    validations: {
      required: 'Este campo es requerido.',
    },
  },
  PARENTBIRTHDAY: {
    name: 'parentBirthday',
    validations: {
      required: 'Este campo es requerido.',
    },
  },
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
  CHILDFIRSTNAME: {
    name: 'childFirstName',
    validations: {
      required: 'Este campo es requerido.',
    },
  },
  CHILDLASTNAME: {
    name: 'childLastName',
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
  CHILDBIRTHDAY: {
    name: 'childBirthday',
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
      parentFirstNameInput: register(
        fields.PARENTFIRSTNAME.name,
        fields.PARENTFIRSTNAME.validations,
      ),
      parentLastNameInput: register(
        fields.PARENTLASTNAME.name,
        fields.PARENTLASTNAME.validations,
      ),
      parentBirthdayInput: register(fields.PARENTBIRTHDAY.name, fields.PARENTBIRTHDAY.validations),
      emailInput: register(fields.EMAIL.name, fields.EMAIL.validations),
      passwordInput: register(fields.PASSWORD.name, fields.PASSWORD.validations),
      childFirstNameInput: register(
        fields.CHILDFIRSTNAME.name,
        fields.CHILDFIRSTNAME.validations,
      ),
      childLastNameInput: register(
        fields.CHILDLASTNAME.name,
        fields.CHILDLASTNAME.validations,
      ),
      genreInput: register(fields.GENRE.name, fields.GENRE.validations),
      childBirthdayInput: register(fields.CHILDBIRTHDAY.name, fields.CHILDBIRTHDAY.validations),
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
