import { useAppSelector } from '@/hooks/reduxHooks';
import ProjectsInfo from './ProjectsInfo';
import UserInfo from './UserInfo';
import styles from './styles.module.scss';
import classNames from 'classnames';

function ProfileInfo() {
  const { isMenu } = useAppSelector((state) => state.main);
  return (
    <div className={classNames(styles.wrapper, { [styles.menuActive]: isMenu })}>
      <UserInfo />
      <ProjectsInfo />
    </div>
  );
}

export default ProfileInfo;
