import React from 'react';
import { Children } from '@/types';
import './styles.scss';

function SubmitButton({ children }: Children) {
  return (
    <button type='submit' className='btn-type-submit'>
      {children}
    </button>
  );
}

export default SubmitButton;
