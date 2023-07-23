import AddMemberToProject from './AddMemberToProject';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';

function ParticipantsProject() {
  const dispatch = useAppDispatch();
  return (
    <>
      <AddMemberToProject />
      <div className={styles.participantsProjectWrapper}>
     {/*    {currentProject?.projectParticipants.map(
          ({ participantId, email, firstName, lastName }) => (
            <div key={participantId} className={styles.participantsProjectItem}>
              <h4 className={styles.participantsName}>
                {firstName} {lastName}
              </h4>
              <p className={styles.participantsEmail}>Email: {email}</p>
              <div className={styles.btnConteiner}>
                <button type='button' className={styles.messageBtn}>
                  Message
                </button>
                <button
                  type='button'
                  onClick={() =>
                    dispatch(
                      deleteParticipants({
                        participantId,
                        projectId: currentProject.projectId,
                      }),
                    )
                  }
                  className={styles.deleteBtn}
                >
                  Delete
                </button>
              </div>
            </div>
          ),
        )} */}
      </div>
    </>
  );
}

export default ParticipantsProject;
