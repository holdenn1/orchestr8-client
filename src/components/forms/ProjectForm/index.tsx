import React, { ChangeEvent, useState } from 'react';
import { Formik, Form, FormikValues } from 'formik';
import { ModalProps } from 'ui/ModalWindow';
import projectFormValidationSchema from '@/utils/validate/projectFormValidationSchema';
import styles from 'components/forms/ProjectForm/styles.module.scss';
import TextInput from 'ui/inputs/formInputs/TextInput';
import TextArea from 'ui/inputs/formInputs/TextArea';
import SubmitButton from 'ui/buttons/SubmitButton';
import MainButton from 'ui/buttons/MainButton';
import classNames from 'classnames';

type ProjectFormProps = Omit<ModalProps, 'children'>;

export type InitialValuesProjectForm = {
  titleProject: string;
  descriptionProject: string;
};

function ProjectForm({ modalVisible, setModalVisible }: ProjectFormProps) {
  const [users, setUsers] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [userEmailError, setUserEmailError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const initialValues: InitialValuesProjectForm = {
    titleProject: '',
    descriptionProject: '',
  };

  function handleSubmit(values: FormikValues, resetForm: any) {
    console.log({ ...values, usersOnProject: users });
    setModalVisible(!modalVisible);
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
        <Form>
          <div className={styles.wrapper}>
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
              <div className={styles.addUserInputWrapper}>
                <div className={styles.labelWrapper}>
                  <label className={styles.label}>Add users to project</label>
                </div>
                <div className={styles.inputAndBtnWrapper}>
                  <div className={styles.inputWrapper}>
                    <input
                      type='email'
                      value={inputValue}
                      className={classNames(styles.input, {
                        [styles.inputError]: userEmailError,
                      })}
                      onChange={(e) => handleInput(e)}
                    />
                    {userEmailError && (
                      <p className={styles.error}>Invalid email address</p>
                    )}
                  </div>
                  <div className={styles.addUserBtnWrapper}>
                    <MainButton
                      type='button'
                      title='Add User'
                      onClick={() => handleUser(inputValue)}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.submitBtnWrapper}>
                <SubmitButton>Create a project</SubmitButton>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ProjectForm;
