import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';
import { Children } from '@/types';
import classNames from 'classnames';

export type ModalProps = {
  children: Children;
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

function ModalWindow({ children, modalVisible, setModalVisible }: ModalProps) {
  return (
    <div
      className={classNames(styles.wrapper, { [styles.modalVisible]: modalVisible })}
      onClick={() => setModalVisible(!modalVisible)}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
