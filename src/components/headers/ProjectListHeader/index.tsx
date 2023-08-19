import { useState, useEffect, ChangeEvent, useRef } from 'react';
import styles from './styles.module.scss';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { searchOwnProjectsAction } from '@/store/actions/projectsActions/searchOwnProjects';
import { setIsSearching } from '@/store/slices/projectSlice';
import { searchForeignProjectsAction } from '@/store/actions/projectsActions/searchForeignProjects';

function ProjectListHeader() {
  const { ownProjects, foreignProjects } = useAppSelector((state) => state.project);
  const debounceTimeoutRefForeign = useRef<number | null>(null);
  const debounceTimeoutRefOwn = useRef<number | null>(null);

  const [inputValue, setInputValue] = useState('');
  const [projectList, setProjectList] = useState('');
  const dispatch = useAppDispatch();
  const { list, status } = useParams();

  useEffect(() => {
    switch (status) {
      case 'all-projects': {
        setProjectList('All projects');
        break;
      }
      case 'in-progress': {
        setProjectList('In progress projects');
        break;
      }
      case 'completed': {
        setProjectList('Completed projects');
        break;
      }
      case 'suspend': {
        setProjectList('Suspend projects');
        break;
      }
    }
  }, [status]);

  useEffect(() => {
    setInputValue('');
    dispatch(setIsSearching(false));
  }, [list]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (status) {
      const value = e.target.value.toLowerCase();
      setInputValue(value);
      if (list === 'own') {
        dispatch(searchOwnProjectsAction({ value, debounceTimeoutRef: debounceTimeoutRefOwn, status }));
      } else {
        dispatch(
          searchForeignProjectsAction({ value, debounceTimeoutRef: debounceTimeoutRefForeign, status }),
        );
      }
    }
  };

  return (
    <header className={styles.contentHeder}>
      <div className={styles.searchProjectInputWrapper}>
        <input
          className={styles.searchProjectInput}
          type='text'
          placeholder='Input the project name'
          value={inputValue}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div className={styles.projectsTitle}>
        <h3>
          {list === 'own'
            ? `Own projects list (${projectList}) on the page -  ${ownProjects.length}`
            : `Foreign projects list (${projectList}) on the page -  ${foreignProjects.length}`}
        </h3>
      </div>
    </header>
  );
}

export default ProjectListHeader;
