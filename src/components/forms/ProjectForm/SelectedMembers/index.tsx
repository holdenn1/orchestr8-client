import styles from './styles.module.scss';
import removeIcon from 'icons/icons8-remove-30.png';
import { SelectedMembersProps } from '../types';

function SelectedMembers({
  selectedMembersList,
  selectedMembersVisible,
  setSelectedMembersVisible,
  removeMemberFromSelected,
}: SelectedMembersProps) {
  return (
    <div className={styles.selectedMembersWrapper}>
      {selectedMembersList.length ? (
        <label
          onClick={() => setSelectedMembersVisible(!selectedMembersVisible)}
          className={styles.seMembersBtn}
        >
          See members
        </label>
      ) : (
        ''
      )}
      {selectedMembersVisible && (
        <ul className={styles.selectesMembersList}>
          {selectedMembersList.map(({ id, email }) => (
            <li key={id} className={styles.selectesMembersItem}>
              <span>{email}</span>{' '}
              <img onClick={() => removeMemberFromSelected(id)} src={removeIcon} alt='' />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectedMembers;
