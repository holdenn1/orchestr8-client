import { RecomendationMembersProps } from '../types';
import styles from './styles.module.scss';


function RecomendationMembers({
  recomendationMemberVisible,
  recomendationMembersList,
  handleUser,
}: RecomendationMembersProps) {
  return (
    <>
      {recomendationMemberVisible && (
        <div className={styles.recomendationMembersWrapper}>
          <ul className={styles.recomendationMembersList}>
            {recomendationMembersList.map(({ id, email }) => (
              <li key={id} onClick={() => handleUser(id)} className={styles.recomendstionMemmersItem}>
                {email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default RecomendationMembers;
