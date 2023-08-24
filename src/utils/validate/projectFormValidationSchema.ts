import * as yup from 'yup';

export default yup.object().shape({
  title: yup
    .string()
    .required('Title is a required field')
    .matches(/^(?!\s)[^\s].*$/, 'Title is a required field'),
  description: yup.string().required('Description is a required field'),
});
