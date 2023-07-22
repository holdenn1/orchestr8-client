import { MemberToProjectInputProps } from '../types';
import styles from './styles.module.scss';

function MemberToProjectInput({ handleInput, inputValue }: MemberToProjectInputProps) {

  return (
    <>
      <div className={styles.labelWrapper}>
        <label className={styles.label}>Add participants to project</label>
      </div>
      <div className={styles.inputWrapper}>
        <input
          type='email'
          value={inputValue}
          placeholder='Input user email'
          className={styles.input}
          onChange={(e) => handleInput(e)}
        />
      </div>
    </>
  );
}

export default MemberToProjectInput;
