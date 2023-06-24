import * as yup from 'yup';

export default yup.object().shape({
  titleProject: yup
    .string()
    .required('Title is a required field')
    .matches(/^(?!\s)[^\s].*$/, 'Title is a required field'),
  descriptionProject: yup
    .string()
    .required('Description is a required field')
    .matches(/^(?!\s)[^\s].*$/, 'Description is a required field'),
});
