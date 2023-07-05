import { useState } from 'react';
import styles from './styles.module.scss';
import squaredProjectsViewIcon from 'icons/icons8-squared-menu-50.png';
import rowProjectsViewIcon from 'icons/icons8-menu-50.png';
import Select from '@/components/UI/inputs/formInputs/Select';
import { sortProjectsByCategory, sortProjectsBy } from '@/store/slices/mainSlice';
import { useAppSelector } from '@/hooks/reduxHooks';
import classNames from 'classnames';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import favoriteIcon from 'icons/icons8-star-24.png';

function ProfileContent() {
  const [viewProjects, setViewProjects] = useState(false);
  const { sort, category } = useAppSelector((store) => store.main.selectedOption);
  const options = ['Опция 1', 'Опция 2', 'Опция 3'];
  const options2 = ['Опция 1', 'Опция 2', 'Опция 3'];
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentHeared}>
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
            <Select
              selectedOption={sort}
              options={options}
              handleOption={sortProjectsBy}
            />
          </div>
          <div className={styles.categories}>
            <p>Category</p>
            <Select
              selectedOption={category}
              options={options2}
              handleOption={sortProjectsByCategory}
            />
          </div>
        </div>
      </div>
      <div className={styles.projectsList}>
        <div className={styles.projecetItem}>
          <h3 className={styles.title}>Lorem,lorem lorem ipsum dolor.</h3>
          <ul className={styles.tastksList}>
            <li className={styles.taskItem}>Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ut, natus optio alias quos dicta repudiandae voluptate. Enim, repellendus nostrum perspiciatis hic similique deserunt, iure ratione pariatur et tempore repellat. sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
          </ul>
          <div className={styles.menu}>
            <DotMenuIcon/>
          </div>
          <img className={styles.favorite} src={favoriteIcon} alt="" />
        </div>
        <div className={styles.projecetItem}>
          <h3 className={styles.title}>Lorem,lorem lorem ipsum dolor.</h3>
          <ul className={styles.tastksList}>
            <li className={styles.taskItem}>Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ut, natus optio alias quos dicta repudiandae voluptate. Enim, repellendus nostrum perspiciatis hic similique deserunt, iure ratione pariatur et tempore repellat. sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
          </ul>
          <div className={styles.menu}>
            <DotMenuIcon/>
          </div>
          <img className={styles.favorite} src={favoriteIcon} alt="" />
        </div>
        <div className={styles.projecetItem}>
          <h3 className={styles.title}>Lorem,lorem lorem ipsum dolor.</h3>
          <ul className={styles.tastksList}>
            <li className={styles.taskItem}>Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ut, natus optio alias quos dicta repudiandae voluptate. Enim, repellendus nostrum perspiciatis hic similique deserunt, iure ratione pariatur et tempore repellat. sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
          </ul>
          <div className={styles.menu}>
            <DotMenuIcon/>
          </div>
          <img className={styles.favorite} src={favoriteIcon} alt="" />
        </div>
        <div className={styles.projecetItem}>
          <h3 className={styles.title}>Lorem,lorem lorem ipsum dolor.</h3>
          <ul className={styles.tastksList}>
            <li className={styles.taskItem}>Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ut, natus optio alias quos dicta repudiandae voluptate. Enim, repellendus nostrum perspiciatis hic similique deserunt, iure ratione pariatur et tempore repellat. sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
            <li className={styles.taskItem}>Lorem ipsum dolor sit.</li>
          </ul>
          <div className={styles.menu}>
            <DotMenuIcon/>
          </div>
          <img className={styles.favorite} src={favoriteIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
