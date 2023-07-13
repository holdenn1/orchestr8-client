import { ChangeEvent, useState } from 'react';
import { Formik, Form, FormikValues } from 'formik';
import projectFormValidationSchema from '@/utils/validate/projectFormValidationSchema';
import styles from 'components/forms/ProjectForm/styles.module.scss';
import TextInput from 'ui/inputs/formInputs/TextInput';
import TextArea from 'ui/inputs/formInputs/TextArea';
import SubmitButton from 'ui/buttons/SubmitButton';
import { InitialValuesProjectForm } from 'components/forms/types';
import { setModal } from '@/store/slices/mainSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import PaticipantToProjectInput from '@/components/UI/inputs/PaticipantToProjectInput';

function ProjectForm() {
  const [users, setUsers] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [userEmailError, setUserEmailError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { modalVisible } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();

  const initialValues: InitialValuesProjectForm = {
    titleProject: '',
    descriptionProject: '',
  };

  function handleSubmit(values: FormikValues, resetForm: any) {
    console.log({ ...values, usersOnProject: users });
    dispatch(setModal(!modalVisible));
    setInputValue('');
    setUserEmailError(false);
    resetForm();
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setUserEmailError(false);
  }

  function handleUser(value: string) {
    if (emailRegex.test(value)) {
      setUsers([...users, value]);
      setInputValue('');
      setUserEmailError(false);
    } else {
      setUserEmailError(true);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={projectFormValidationSchema}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {() => (
        <div className={styles.projectFormwrapper}>
          <Form>
            <div>
              <TextInput
                name='titleProject'
                type='text'
                label='Project name'
                placeholder='Project name'
              />
              <TextArea
                name='descriptionProject'
                label='Project description'
                placeholder='Project description'
              />
              <PaticipantToProjectInput
                handleUser={handleUser}
                handleInput={handleInput}
                inputValue={inputValue}
                userEmailError={userEmailError}
              />
              <div className={styles.submitBtnWrapper}>
                <SubmitButton>Create a project</SubmitButton>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ProjectForm;
