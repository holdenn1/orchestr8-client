import React from 'react';
import MainWrapper from '@/components/UI/wrappers/MainWrapper/MainWrapper';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <MainWrapper>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea maxime repudiandae sequi vitae.
        Ad deserunt distinctio, dolor eaque illo in laborum maiores natus non pariatur provident qui
        unde vitae, voluptatum!
      </p>
      <Link to='sign-up'>Sign Up</Link>
    </MainWrapper>
  );
}

export default HomePage;
