import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import AddMemberToProject from './AddMemberToProject';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useParams } from 'react-router-dom';
import { Project } from '@/store/slices/types/projectSliceTypes';
import { updateOwnProjectAction } from '@/store/actions/projectsActions/updateOwmProject';

function Members() {
  const { ownProjects } = useAppSelector((state) => state.project);
  const [currentProject, setCurrentProject] = useState<Project>();
  const { projectId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (projectId) {
      const project = ownProjects.find((project) => project.id === +projectId);
      setCurrentProject(project);
    }
  }, [projectId, ownProjects]);

  const deleteMember = (id: number) => {
    const currentMembers = currentProject?.members.filter((member) => member.id !== id);
    if (currentMembers && projectId) {
      const membersIds: number[] = currentMembers?.map((member) => member.id);
      dispatch(updateOwnProjectAction({ projectId, updateProjectData: { membersIds } }));
    }
  };
  return (
    <>
      <AddMemberToProject />
      <div className={styles.participantsProjectWrapper}>
        {currentProject?.members.map(({ id, email, firstName, lastName }) => (
          <div key={id} className={styles.participantsProjectItem}>
            <h4 className={styles.participantsName}>
              {firstName} {lastName}
            </h4>
            <p className={styles.participantsEmail}>Email: {email}</p>
            <div className={styles.btnConteiner}>
              <button type='button' className={styles.messageBtn}>
                Message
              </button>
              <button onClick={() => deleteMember(id)} type='button' className={styles.deleteBtn}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Members;
