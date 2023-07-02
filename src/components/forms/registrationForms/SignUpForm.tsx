import React, { useState } from 'react';
import { Form, Formik, FormikProps, FormikValues, useFormikContext } from 'formik';
import styles from './styles.module.scss';
import {
  EmailAndPassword,
  FullNameAndPhone,
} from 'components/forms/registrationForms/steps';
import signUpValidateSchema from '@/utils/validate/signUpValidateSchema';
import Progress from 'components/forms/registrationForms/Progress';
import FormNavigation from 'components/forms/registrationForms/FormNavigation';
import { registrationUserRequest } from '@/api/requests';
import { notify } from 'components/Toast';
import { InitialValuesSignUpForm } from 'components/forms/types';

function SignUpForm(props) {
  const [step, setStep] = useState(0);
  const stepComponents = [FullNameAndPhone, EmailAndPassword];
  const currentValidateSchema = signUpValidateSchema[step];

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

  const handleSubmit = async (values: FormikValues, resetForm: any) => {
    if (step === stepComponents.length - 1) {
      try {
        const { data } = await registrationUserRequest(values);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        setStep(0);
        resetForm();
      } catch (e) {
        notify('Check field', 'error');
        console.log(e);
      }
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
  );
}

export default SignUpForm;
