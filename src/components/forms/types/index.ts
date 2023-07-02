import { ModalProps } from 'ui/ModalWindow';

export type InitialValuesSignUpForm = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type InitialValuesSignInForm = {
  email: string;
  password: string;
};

export type FormNavigationProps = {
  handleNext?: () => void;
  handlePrev?: () => void;
  step?: number;
};

export type ProjectFormProps = Omit<ModalProps, 'children'>;

export type InitialValuesProjectForm = {
  titleProject: string;
  descriptionProject: string;
};
