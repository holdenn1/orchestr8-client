import { useState } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import styles from './styles.module.scss';
import {
  EmailAndPassword,
  FullNameAndPhone,
} from 'components/forms/registrationForms/steps';
import signUpValidateSchema from '@/utils/validate/signUpValidateSchema';
import Progress from 'components/forms/registrationForms/Progress';
import FormNavigation from 'components/forms/registrationForms/FormNavigation';
import { InitialValuesSignUpForm } from 'components/forms/types';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { registrationUser } from '@/store/actions/registrationUser';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [step, setStep] = useState(0);
  const stepComponents = [FullNameAndPhone, EmailAndPassword];
  const currentValidateSchema = signUpValidateSchema[step];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: InitialValuesSignUpForm = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const renderSteps = (formikProps: any) => {
    const Component = stepComponents[step];
    return <Component {...formikProps} />;
  };

  const handleSubmit = async (values: InitialValuesSignUpForm, resetForm: any) => {
    if (step === stepComponents.length - 1) {
      const { confirmPassword, ...registrationValues } = values;
      dispatch(registrationUser({ registrationValues, setStep, resetForm, navigate }));
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleNext = (props: FormikProps<any>) => {
    props.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        if (step < stepComponents.length - 1) {
          setStep(step + 1);
        }
      } else {
        Object.keys(errors).forEach((fieldName) => {
          props.setFieldError(fieldName, errors[fieldName] as string);
          props.setFieldTouched(fieldName, true);
        });
      }
    });
  };

  return (
    <div className={styles.formWrapper}>
    <Formik
      initialValues={initialValues}
      validationSchema={currentValidateSchema}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {(props) => (
        <Form className={styles.signUpForm}>
          <Progress activeStep={step + 1} />
          {renderSteps(props)}
          <FormNavigation
            handlePrev={handlePrev}
            handleNext={() => handleNext(props)}
            step={step}
          />
        </Form>
      )}
    </Formik>
    </div>

  );
}

export default SignUpForm;
