import React from 'react';
import styles from './styles.module.scss';
import TextInput from 'ui/inputs/formInputs/TextInput';
import TextArea from 'ui/inputs/formInputs/TextArea';
import AddUsersToProjectInput from 'components/forms/ProjectForm/AddUsersToProjectInput';
import MainFormButton from 'ui/buttons/FormButtons/MainFormButton';

function ProjectFormContent({ handleSubmit }: () => void) {
  return (
    <div className={styles.wrapper}>
      <div>
        <TextInput
          name='titleProject'
          type='text'
          label='Project name'
          placeholder='Project name'
        />
        <TextArea
          name='descriptionProject'
          label='Project description'
          placeholder='Project description'
        />
        <AddUsersToProjectInput />
        <div className={styles.btnWrapper}>
          <MainFormButton type='submit' title='Create project' onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default ProjectFormContent;
