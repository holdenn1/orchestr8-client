import styles from './styles.module.scss';
import { Form, Formik } from 'formik';
import AddMember from '@/components/forms/ProjectForm/AddTaskForm/AddMember';
import { useEffect, useState } from 'react';
import { Member, Project } from '@/store/slices/types/projectSliceTypes';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useParams } from 'react-router-dom';
import { updateProjectAction } from '@/store/actions/projectsActions/updateProject';
import SubmitButton from '@/components/UI/buttons/SubmitButton';

function AddMemberToProject() {
  const [selectedMembersList, setSelectedMembersList] = useState<Member[]>([]);
  const { projects } = useAppSelector((state) => state.project);
  const [currentProject, setCurrentProject] = useState<Project>();
  const [inputValue, setInputValue] = useState('');
  const { projectId, list } = useParams();
  const dispatch = useAppDispatch();

  function handleSubmit(resetForm: any) {
    if (currentProject && projectId && selectedMembersList.length) {
      const newMembersIds: number[] = selectedMembersList.map((member) => member.id);
      dispatch(
        updateProjectAction({
          projectId,
          updateProjectData: { membersIds: newMembersIds },
        }),
      );
      setSelectedMembersList([]);
      setInputValue('');
      resetForm();
    }
  }

  useEffect(() => {
    if (projectId) {
      if (list) {
        const project = projects.find((project) => project.id === +projectId);
        setCurrentProject(project);
      }
    }
  }, [projects, list]);

  return (
    <div className={styles.AddPaticipantToProject}>
      <Formik initialValues={{}} onSubmit={(_, { resetForm }) => handleSubmit(resetForm)}>
        {() => (
          <Form onClick={(e) => e.stopPropagation()}>
            <div className={styles.contentFormWrapper}>
              <AddMember
                inputValue={inputValue}
                selectedMembersList={selectedMembersList}
                setInputValue={setInputValue}
                setSelectedMembersList={setSelectedMembersList}
              />
            </div>
            <div className={styles.btnSubWrapper}>
              <SubmitButton>Add members</SubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddMemberToProject;
