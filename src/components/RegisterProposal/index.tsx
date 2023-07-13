import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setModal } from '@/store/slices/mainSlice';

function RegisterProposal() {
  const { modalVisible } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.registerProposalwrapper}>
      <h3 className={styles.title}>First you need to register</h3>
      <Link
        to='sign-up'
        className={styles.link}
        onClick={() => dispatch(setModal(!modalVisible))}
      >
        start registration
      </Link>
    </div>
  );
}

export default RegisterProposal;
