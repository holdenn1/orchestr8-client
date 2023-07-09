import { ChangeEvent } from 'react';
import styles from './styles.module.scss';
import MainButton from '../../buttons/MainButton';
import classNames from 'classnames';

type PaticipantToProjectInputProps = {
  handleUser: (value: string) => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  userEmailError: boolean;
};

function PaticipantToProjectInput({
  handleUser,
  handleInput,
  inputValue,
  userEmailError,
}: PaticipantToProjectInputProps) {
  return (
    <div className={styles.addUserInputWrapper}>
      <div className={styles.labelWrapper}>
        <label className={styles.label}>Add participants to project</label>
      </div>
      <div className={styles.inputAndBtnWrapper}>
        <div className={styles.inputWrapper}>
          <input
            type='email'
            value={inputValue}
            className={classNames(styles.input, {
              [styles.inputError]: userEmailError,
            })}
            onChange={(e) => handleInput(e)}
          />
          {userEmailError && <p className={styles.error}>Invalid email address</p>}
        </div>
        <div className={styles.addUserBtnWrapper}>
          <MainButton
            type='button'
            title='Add Paticipant'
            onClick={() => handleUser(inputValue)}
          />
        </div>
      </div>
    </div>
  );
}

export default PaticipantToProjectInput;
