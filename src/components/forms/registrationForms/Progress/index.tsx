import React, { useEffect, useRef } from 'react';
import './styles.scss';

function Progress({ activeStep }: number) {
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const stepsListRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const steps = [...stepsListRef.current!.children];
    steps.forEach((step, i) => {
      if (i < activeStep) {
        step.classList.add('active-step');
      } else {
        step.classList.remove('active-step');
      }
    });

    progressBarRef.current!.style.width =
      ((activeStep - 1) / (steps.length - 1)) * 100 + '%';
  }, [activeStep]);

  return (
    <div className='progress'>
      <div ref={progressBarRef} className='progress-bar' />
      <ul ref={stepsListRef} className='progress-num'>
        <li className='step active-step'>1</li>
        <li className='step'>2</li>
      </ul>
    </div>
  );
}

export default Progress;
