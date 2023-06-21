import React from 'react';
import './styles.scss';

type MainFormButtonProps = {
  type: string;
  title: string;
  onClick?: () => void;
};

function MainFormButton({ type, title, ...props }: MainFormButtonProps) {
  return (
    <button type='button' className={`btn-type-${type}`} {...props}>
      {title}
    </button>
  );
}

export default MainFormButton;
