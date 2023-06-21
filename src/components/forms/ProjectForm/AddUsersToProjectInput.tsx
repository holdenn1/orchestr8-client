import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Field } from 'formik';

const ControlInput = ({ field, form }: any) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddUser = () => {
    if (inputValue) {
      form.setFieldValue(field.name, [...field.value, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className={styles.inputAndButtonWrapper}>
      <input
        type='email'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
      />
      <button className={styles.btn} type='button' onClick={handleAddUser}>
        Add User
      </button>
    </div>
  );
};

function AddUsersToProjectInput() {
  return (
    <div className={styles.addUserInputWrapper}>
      <div className={styles.labelWrapper}>
        <label className={styles.label} htmlFor='usersOnProject'>
          Users on Project
        </label>
      </div>
      <Field type='email' name='usersOnProject' component={ControlInput} />
    </div>
  );
}

export default AddUsersToProjectInput;
