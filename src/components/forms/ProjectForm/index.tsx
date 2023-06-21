import React from 'react';
import { Formik, Form } from 'formik';
import ProjectFormContent from './ProjectFormContent';
import { ModalProps } from 'ui/ModalWindow';

type ProjectFormProps = Omit<ModalProps, 'children'>;

export type InitialValuesProjectForm = {
  titleProject: string;
  descriptionProject: string;
  usersOnProject: string[];
};

function ProjectForm({ modalVisible, setModalVisible }: ProjectFormProps) {
  const initialValues: InitialValuesProjectForm = {
    titleProject: '',
    descriptionProject: '',
    usersOnProject: [],
  };

  function handleSubmit(values: InitialValuesProjectForm, resetForm: any) {
    console.log(values);
    setModalVisible(!modalVisible);
    resetForm();
  }

  return (
    <Formik initialValues={initialValues}>
      {({ values, resetForm }) => (
        <Form>
          <ProjectFormContent handleSubmit={() => handleSubmit(values, resetForm)} />
        </Form>
      )}
    </Formik>
  );
}

export default ProjectForm;
