import { Form, Formik } from 'formik';
import styles from './styles.module.scss';
import TextArea from '@/components/UI/inputs/formInputs/TextArea';
import SubmitButton from '@/components/UI/buttons/SubmitButton';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { createTask } from '@/store/actions/tasksActions/createTask';
import { useParams } from 'react-router-dom';

function AddTaskForm() {
  const dispatch = useAppDispatch();
  const { projectId } = useParams();

  function handleSubmit({ task }: { task: string }, resetForm: any) {
    if (projectId) {
      dispatch(createTask({ task, projectId }));
      resetForm();
    }
  }
  return (
    <div className={styles.addTaskWrapper}>
      <Formik
        initialValues={{
          task: '',
        }}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {() => (
          <Form>
            <TextArea name='task' placeholder='Input new task' />
            <SubmitButton>Add task</SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddTaskForm;
