import styles from './styles.module.scss';
import { Form, Formik } from 'formik';
import AddMember from '@/components/forms/ProjectForm/AddTaskForm/AddMember';
import { useEffect, useState } from 'react';
import { Member, Project } from '@/store/slices/types/projectSliceTypes';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useParams } from 'react-router-dom';
import { updateOwnProjectAction } from '@/store/actions/projectsActions/updateOwmProject';
import SubmitButton from '@/components/UI/buttons/SubmitButton';

function AddMemberToProject() {
  const [selectedMembersList, setSelectedMembersList] = useState<Member[]>([]);
  const { ownProjects, foreignProjects } = useAppSelector((state) => state.project);
  const [currentProject, setCurrentProject] = useState<Project>();
  const [inputValue, setInputValue] = useState('');
  const { projectId, list } = useParams();
  const dispatch = useAppDispatch();

  function handleSubmit(resetForm: any) {

    if (currentProject && projectId && selectedMembersList.length) {
     
      const newMembersIds: number[] = selectedMembersList.map((member) => member.id);
      dispatch(
        updateOwnProjectAction({
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
      if (list === 'own') {
        const project = ownProjects.find((project) => project.id === +projectId);
        setCurrentProject(project);
      } else {
        const project = foreignProjects.find((project) => project.id === +projectId);
        setCurrentProject(project);
      }
    }
  }, [ownProjects, foreignProjects, list]);

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
            <SubmitButton>Add members</SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddMemberToProject;
