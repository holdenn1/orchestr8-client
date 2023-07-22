import styles from './styles.module.scss';
import removeIcon from 'icons/icons8-remove-30.png';
import { SelectedMembersProps } from '../types';
import classNames from 'classnames';

function SelectedMembers({
  selectedMembersList,
  selectedMembersVisible,
  setSelectedMembersVisible,
  removeMemberFromSelected,
}: SelectedMembersProps) {
  return (
    <div className={styles.selectedMembersWrapper}>
      <label
        onClick={() => setSelectedMembersVisible(!selectedMembersVisible)}
        className={classNames(styles.seMembersBtn, {[styles.seMembersBtnActive]: selectedMembersList.length}) }
      >
        See members
      </label>

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
