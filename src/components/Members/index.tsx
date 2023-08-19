import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import AddMemberToProject from './AddMemberToProject';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useParams } from 'react-router-dom';
import { Project } from '@/store/slices/types/projectSliceTypes';
import { updateProjectAction } from '@/store/actions/projectsActions/updateProject';
import profileIcon from 'icons/icons8-male-user-100.png';
import EmptyList from '../errors/listError/EmptyList';
import { MemberRole } from '@/store/slices/types/userSliceTypes';
import { updateMemberRole } from '@/api/requests';
import { updateRole } from '@/store/slices/projectSlice';
import { useAuth } from '@/hooks/useAuth';

function Members() {
  const { ownProjects, foreignProjects } = useAppSelector((state) => state.project);
  const [currentProject, setCurrentProject] = useState<Project>();
  const { projectId, list } = useParams();
  const { id: userId } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (projectId) {
      if (list === 'own') {
        const project = ownProjects.find((project) => project.id === +projectId);
        if (project) {
          setCurrentProject(project);
        }
      } else {
        const project = foreignProjects.find((project) => project.id === +projectId);
        if (project) {
          setCurrentProject(project);
        }
      }
    }
  }, [projectId, ownProjects]);

  const deleteMember = (id: number) => {
    const currentMembers = currentProject?.members.filter((member) => member.id === id);
    if (currentMembers && projectId) {
      const membersIds: number[] = currentMembers?.map((member) => member.id);
      dispatch(updateProjectAction({ projectId, updateProjectData: { membersIds }, list }));
    }
  };

  const setMemberRole = async (memberId: number, memberRole: MemberRole) => {
    const role =
      memberRole === MemberRole.PROJECT_MEMBER ? MemberRole.PROJECT_MANAGER : MemberRole.PROJECT_MEMBER;
    if (projectId) {
      await updateMemberRole(String(projectId), String(memberId), { memberRole: role });
      dispatch(updateRole({ memberId, projectId: +projectId, role }));
    }
  };

  return (
    <>
      {list === 'own' && <AddMemberToProject />}
      <div className={styles.participantsProjectWrapper}>
        {currentProject?.members ? (
          <>
            {currentProject?.members.map(({ id, email, firstName, lastName, photo, role }) => {
              if (id !== userId) {
                return (
                  <div key={id} className={styles.participantsProjectItem}>
                    <div className={styles.memberInfoWrapper}>
                      <img className={styles.memberAvatar} src={photo ?? profileIcon} alt='' />
                      <div>
                        <h4 className={styles.participantsName}>
                          {firstName} {lastName}
                        </h4>
                        <h3 style={{ textAlign: 'center' }}>
                          {role === MemberRole.PROJECT_MEMBER ? 'Member' : 'Manager'}
                        </h3>
                      </div>
                    </div>
                    <p className={styles.participantsEmail}>Email: {email}</p>
                    {list === 'own' && (
                      <div className={styles.btnConteiner}>
                        <button
                          type='button'
                          className={styles.messageBtn}
                          onClick={() => setMemberRole(id, role)}
                        >
                          {role === MemberRole.PROJECT_MEMBER ? 'Appoint a Manager' : 'Appoint a Member'}
                        </button>
                        <button onClick={() => deleteMember(id)} type='button' className={styles.deleteBtn}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </>
        ) : (
          <EmptyList>Members not found</EmptyList>
        )}
      </div>
    </>
  );
}

export default Members;
