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
  const [recomendationMemberVisible, setRecomendationMemberVisible] = useState<boolean>(false);
  const [selectedMembersVisible, setSelectedMembersVisible] = useState<boolean>(false);
  const { allProjects } = useAppSelector((state) => state.project);
  const [currentProject, setCurrentProject] = useState<Project>();
  const [inputValue, setInputValue] = useState('');
  const { projectId } = useParams();
  const dispatch = useAppDispatch();

  function handleSubmit(resetForm: any) {
    if (currentProject && projectId) {
      const newMembersIds: number[] = selectedMembersList.map((member) => member.id);
      const oldMembers: number[] = currentProject?.members.map((memberId) => memberId.id);
      dispatch(updateProjectAction({projectId,updateProjectData:{membersIds: [...oldMembers, ...newMembersIds]}})  );
      setSelectedMembersList([]);
      setInputValue('');
      resetForm();
    }
  }

  useEffect(() => {
    if (projectId) {
      const project = allProjects.find((project) => project.id === +projectId);
      setCurrentProject(project);
    }
  }, []);

  return (
    <div className={styles.AddPaticipantToProject}>
      <Formik initialValues={{}} onSubmit={(_, { resetForm }) => handleSubmit(resetForm)}>
        {() => (
          <Form>
            <div className={styles.contentFormWrapper}>
              <AddMember
                inputValue={inputValue}
                recomendationMemberVisible={recomendationMemberVisible}
                selectedMembersList={selectedMembersList}
                selectedMembersVisible={selectedMembersVisible}
                setInputValue={setInputValue}
                setRecomendationMemberVisible={setRecomendationMemberVisible}
                setSelectedMembersList={setSelectedMembersList}
                setSelectedMembersVisible={setSelectedMembersVisible}
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
