import React from 'react';
import styles from './styles.module.scss';
import { ModalProps } from 'ui/ModalWindow';
import classNames from 'classnames';

type GreetingProps = Omit<ModalProps, 'children'>;

function Greeting({ modalVisible, setModalVisible }: GreetingProps) {
  return (
    <div
      className={classNames(styles.wrapper, { [styles.visibleGreeting]: modalVisible })}
    >
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Welcome to Orchestr8! </h3>
        <p className={styles.description}>Your project management assistant</p>
        <button
          type='button'
          onClick={() => setModalVisible(!modalVisible)}
          className={styles.greetingBtn}
        >
          Start planning
        </button>
      </div>
    </div>
  );
}

export default Greeting;
