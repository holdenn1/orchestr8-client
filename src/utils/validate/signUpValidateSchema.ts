import * as yup from 'yup';

export default [
  yup.object().shape({
    firstName: yup
      .string()
      .required('Name is a required field')
      .matches(/^(?!\s)[^\s].*$/, 'Name is a required field'),
    lastName: yup
      .string()
      .required('Surname is a required field')
      .matches(/^(?!\s)[^\s].*$/, 'Surname is a required field'),
    phone: yup
      .string()
      .required('Phone is a required field')
      .matches(/^[\d+]+$/, 'A phone number can only contain numbers')
      .min(10, 'The phone number is not correct')
      .max(14, 'The phone number is not correct'),
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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  }),
];
