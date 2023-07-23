import { Form, Formik } from 'formik';
import styles from './styles.module.scss';
import TextArea from '@/components/UI/inputs/formInputs/TextArea';
import SubmitButton from '@/components/UI/buttons/SubmitButton';

function AddTask() {
  function handleSubmit(values: { taskText: string }, resetForm: any) {
    console.log(values);
    resetForm();
  }
  return (
    <div className={styles.addTaskWrapper}>
      <Formik
        initialValues={{
          taskText: '',
        }}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {() => (
          <Form>
            <TextArea name='taskText' placeholder='Input new task' />
            <SubmitButton>Add task</SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddTask;
