import { useSWRConfig } from 'swr';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

import useUser from 'hooks/useUser';
import { dayjs, formatDate } from 'utils/dates';

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
      max: {
        value: formatDate(dayjs().subtract(18, 'year'), 'YYYY/MM/DD'),
        message: 'Debes ser mayor de edad para poder registrarte.',
      },
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
      minLength: {
        value: 8,
        message: 'Tu contraseña debe contar con mas de 8 caracteres',
      },
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
      max: {
        value: formatDate(dayjs().subtract(13, 'year'), 'YYYY/MM/DD'),
        message: 'Tu hijo debe tener 13 años o mas.',
      },
    },
  },
  PRIVACYPOLICIES: {
    name: 'privacyPolicies',
    validations: {
      required: 'Este campo es requerido.',
    },
  },
};

const useProfileForm = ({ user, onSubmit: onSubmitParam } = {}) => {
  const { push, query } = useRouter();
  const { user: loggedUserInfo } = useUser();
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = ({ childBirthday, parentBirthday, ...data }) => {
    setIsSubmitting(true);
    const [childBirthdayYYYY, childBirthdayMM, childBirthdayDD] = childBirthday.split('-');
    const [parentBirthdayYYYY, parentBirthdayMM, parentBirthdayDD] = parentBirthday.split('-');
    onSubmitParam({
      ...data,
      childBirthday: dayjs()
        .year(childBirthdayYYYY)
        .month(childBirthdayMM - 1)
        .date(childBirthdayDD)
        .startOf('date'),
      parentBirthday: dayjs()
        .year(parentBirthdayYYYY)
        .month(parentBirthdayMM - 1)
        .date(parentBirthdayDD)
        .startOf('date'),
    })
      .then(() => {
        mutate('/auth/login', { ...loggedUserInfo, ...data }).then(() => push(query?.prev ?? '/'));
      })
      .catch((e) => toast.error(e.message))
      .finally(() => setIsSubmitting(false));
  };

  useEffect(() => {
    if (user) {
      Object.values(fields).forEach((field) => {
        const fieldIsEmailOrPassword = [
          fields.EMAIL.name,
          fields.PASSWORD.name,
        ].includes(field.name);

        if (!fieldIsEmailOrPassword) {
          setValue(field.name, user[field.name]);
        }
      });
    }
  }, [user]);

  return [
    {
      errors,
      isSubmitting,
      registerParentFirstNameInput: () => register(
        fields.PARENTFIRSTNAME.name,
        fields.PARENTFIRSTNAME.validations,
      ),
      registerParentLastNameInput: () => register(
        fields.PARENTLASTNAME.name,
        fields.PARENTLASTNAME.validations,
      ),
      registerParentBirthdayInput: () => register(
        fields.PARENTBIRTHDAY.name,
        fields.PARENTBIRTHDAY.validations,
      ),
      registerEmailInput: () => register(
        fields.EMAIL.name,
        fields.EMAIL.validations,
      ),
      registerPasswordInput: () => register(
        fields.PASSWORD.name,
        fields.PASSWORD.validations,
      ),
      registerChildFirstNameInput: () => register(
        fields.CHILDFIRSTNAME.name,
        fields.CHILDFIRSTNAME.validations,
      ),
      registerChildLastNameInput: () => register(
        fields.CHILDLASTNAME.name,
        fields.CHILDLASTNAME.validations,
      ),
      registerGenreInput: () => register(
        fields.GENRE.name,
        fields.GENRE.validations,
      ),
      registerChildBirthdayInput: () => register(
        fields.CHILDBIRTHDAY.name,
        fields.CHILDBIRTHDAY.validations,
      ),
      registerPrivacyPoliciesInput: () => register(
        fields.PRIVACYPOLICIES.name,
        fields.PRIVACYPOLICIES.validations,
      ),
    },
    {
      onSubmit: handleSubmit(onSubmit),
    },
  ];
};

export default useProfileForm;
