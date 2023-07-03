import { ReactNode } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setModal } from '@/store/slices/mainSlice';

type ModalProps = {
  children: ReactNode;
};

function ModalWindow({ children }: ModalProps) {
  const { modalVisible } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.modalVisible]: modalVisible,
        [styles.hideModal]: !modalVisible,
      })}
      onClick={() => dispatch(setModal(!modalVisible))}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
