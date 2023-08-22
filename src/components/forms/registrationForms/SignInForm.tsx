import { Form, Formik } from 'formik';
import styles from './styles.module.scss';
import TextInput from 'ui/inputs/formInputs/TextInput';
import SignUpFormInputsWrapper from 'ui/wrappers/SignUpFormInputsWrapper';
import signInValidateSchema from '@/utils/validate/signInValidateSchema';
import mainImg from '@/assets/images/wallpaperflare.com_wallpaper (1).jpg'
import FormNavigation from 'components/forms/registrationForms/FormNavigation';
import { InitialValuesSignInForm } from 'components/forms/types';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '@/store/actions/authActions/loginUser';

function SignInForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const initialValues: InitialValuesSignInForm = {
    email: '',
    password: '',
  };

  const handleSubmit = async (loginValues: InitialValuesSignInForm, resetForm: any) => {
    dispatch(loginUser({ loginValues, navigate, resetForm }));
  };

  return (
    <div className={styles.formWrapper}>
      <img className={styles.mainImg} src={mainImg} alt="" />
      <Formik
        initialValues={initialValues}
        validationSchema={signInValidateSchema}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {() => (
          <Form className={styles.signInForm}>
            <SignUpFormInputsWrapper>
              <TextInput
                name='email'
                type='email'
                placeholder='Your email'
                label='Email'
              />
              <TextInput
                name='password'
                type='password'
                placeholder='Your password'
                label='Password'
              />
            </SignUpFormInputsWrapper>
            <FormNavigation />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignInForm;
