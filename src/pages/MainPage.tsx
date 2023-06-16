import React, { useState } from 'react';
import Greeting from 'components/Greeting';
import MainWrapper from 'ui/wrappers/MainWrapper';
import ModalWindow from 'ui/ModalWindow';

function MainPage() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <MainWrapper>
      <Greeting modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <ModalWindow modalVisible={modalVisible} setModalVisible={setModalVisible}>
        lodads
      </ModalWindow>
    </MainWrapper>
  );
}

export default MainPage;
