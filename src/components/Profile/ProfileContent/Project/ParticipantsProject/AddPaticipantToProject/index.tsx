import { Form, Formik } from 'formik';
import styles from './styles.module.scss';
import TextInput from '@/components/UI/inputs/formInputs/TextInput';
import SubmitButton from '@/components/UI/buttons/SubmitButton';

function AddPaticipantToProject() {
  
  function handleSubmit(values: { paticipantEmail: string }, resetForm: any) {
    console.log(values);
    resetForm();
  }
  return (
    <div className={styles.AddPaticipantToProject}>
      <Formik
        initialValues={{ paticipantEmail: '' }}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {() => (
          <Form>
            <div className={styles.contentFormWrapper}>
              <TextInput
                name='paticipantEmail'
                type='email'
                placeholder='Input paticipant email'
              />
              <SubmitButton>Add paticipant</SubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddPaticipantToProject;
