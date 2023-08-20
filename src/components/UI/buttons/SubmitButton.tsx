import { ReactNode } from 'react';
import './styles.scss';

type Children = {
  children: ReactNode;
};

function SubmitButton({ children }: Children) {
  return (
    <button type='submit' className='btn-type-submit'>
      {children}
    </button>
  );
}

export default SubmitButton;
