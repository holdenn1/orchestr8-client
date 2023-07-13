import { useState } from 'react';
import styles from './styles.module.scss';
import squaredProjectsViewIcon from 'icons/icons8-squared-menu-50.png';
import rowProjectsViewIcon from 'icons/icons8-menu-50.png';
import { sortProjectsByCategory, sortProjectsBy } from '@/store/slices/mainSlice';
import classNames from 'classnames';
import { useAppSelector } from '@/hooks/reduxHooks';
import Select from '@/components/UI/inputs/Select';

function ProfileContentHeader() {
  const [viewProjects, setViewProjects] = useState(false);
  const { sort, category } = useAppSelector((store) => store.main.selectedOption);

  const options = ['Опция 1', 'Опция 2', 'Опция 3'];
  const options2 = ['Опция 1', 'Опция 2', 'Опция 3'];
  return (
    <header className={styles.contentHeared}>
      <div className={styles.projectViewBtns}>
        <img
          className={classNames({ [styles.sortByViewActive]: true })}
          src={squaredProjectsViewIcon}
          alt=''
        />
        <img
          className={classNames({ [styles.sortByViewActive]: viewProjects })}
          src={rowProjectsViewIcon}
          alt=''
        />
      </div>
      <div className={styles.projectsFilter}>
        <div className={styles.categories}>
          <p>Sort</p>
          <Select selectedOption={sort} options={options} handleOption={sortProjectsBy} />
        </div>
        <div className={styles.categories}>
          <p>Category</p>
          <Select selectedOption={category} options={options2} handleOption={sortProjectsByCategory} />
        </div>
      </div>
    </header>
  );
}

export default ProfileContentHeader;
