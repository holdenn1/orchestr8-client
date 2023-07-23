export type InitialValuesSignUpForm = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type InitialValuesSignInForm = Pick<InitialValuesSignUpForm, 'email' | 'password'>;

export type FormNavigationProps = {
  handleNext?: () => void;
  handlePrev?: () => void;
  step?: number;
};

export type InitialValuesProjectForm = {
  title: string;
  description: string;
};
