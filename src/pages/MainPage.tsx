import React, { useState } from 'react';
import Greeting from 'components/Greeting';
import MainWrapper from 'ui/wrappers/MainWrapper';
import ModalWindow from 'ui/ModalWindow';
import ProjectForm from 'components/forms/ProjectForm';

function MainPage() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <MainWrapper>
      <Greeting modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <ModalWindow modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <ProjectForm modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </ModalWindow>
    </MainWrapper>
  );
}

export default MainPage;
