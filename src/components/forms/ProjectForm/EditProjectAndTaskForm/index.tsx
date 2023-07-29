import SubmitButton from '@/components/UI/buttons/SubmitButton';
import TextArea from '@/components/UI/inputs/formInputs/TextArea';
import TextInput from '@/components/UI/inputs/formInputs/TextInput';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { updateProjectAction } from '@/store/actions/projectsActions/updateProject';
import { setShowEditTaskForm } from '@/store/slices/mainSlice';
import { Form, Formik } from 'formik';
import { useParams } from 'react-router-dom';

type InitialValuesEditProjectAndTaskForm = {
  title: string;
  description: string;
  task: string;
};

function EditProjectAndTaskForm() {
  const { projectId, taskId } = useParams();
  const dispatch = useAppDispatch();

  const initialValues: InitialValuesEditProjectAndTaskForm = {
    title: '',
    description: '',
    task: '',
  };

  const handleSubmit = (
    { title, description, task }: InitialValuesEditProjectAndTaskForm,
    resetForm: any,
  ) => {
    if (projectId && taskId) {
      dispatch(
        updateProjectAction({
          projectId,
          taskId,
          updateProjectData: { title: title.trim(), description: description.trim() },
          updateTaskData: { task: task.trim() },
        }),
      );
      resetForm();
      dispatch(setShowEditTaskForm(false));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
    >
      {() => (
        <Form>
          <TextInput name='title' type='text' label='Title Project' placeholder='Edit title' />
          <TextArea name='description' label='descriptionProject' placeholder='Edidt description project' />
          <TextArea name='task' label='Task text' placeholder='Edit task text' />
          <div style={{ textAlign: 'center' }}>
            <SubmitButton>Edit project</SubmitButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default EditProjectAndTaskForm;
