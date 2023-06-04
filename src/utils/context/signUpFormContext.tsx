import React from 'react';

type SignUpFormContextProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const SignUpFormContext = React.createContext<SignUpFormContextProps | null>(null);