import React from 'react';
import './styles.scss';

type MainFormButtonProps = {
  type: string;
  title: string;
  onClick: () => void;
};

function MainFormButton({ type, title, onClick }: MainFormButtonProps) {
  return (
    <button type='button' className={`btn-type-${type}`} onClick={onClick}>
      {title}
    </button>
  );
}

export default MainFormButton;
