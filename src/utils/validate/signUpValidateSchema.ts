import * as yup from 'yup';

export default [
  yup.object().shape({
    name: yup
      .string()
      .required('Name is a required field')
      .matches(/^(?!\s)[^\s].*$/, 'Name is a required field'),
    surname: yup
      .string()
      .required('Surname is a required field')
      .matches(/^(?!\s)[^\s].*$/, 'Surname is a required field'),
  }),
  yup.object().shape({
    email: yup.string().required('Email is required field').email('Invalid email address'),
    password: yup
      .string()
      .required('Password is required field')
      .min(6, 'Password must contain at least six characters')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        'Password must contain a letter, a number and one special character',
      ),
  }),
  yup.object().shape({
    position: yup.string().required('Position is a required field'),
    phone: yup
      .string()
      .required('Phone is a required field')
      .matches(/^[\d+]+$/, 'A phone number can only contain numbers')
      .min(10, 'The phone number is not correct')
      .max(14, 'The phone number is not correct'),
  }),
];
