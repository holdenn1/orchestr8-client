import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import styles from './styles.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setcurrentProject, toggleComplete } from '@/store/slices/projectSlice';
function Project() {
  const { projects, currentProject } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      const project = projects.find((proj) => proj.projectId === +projectId);
      if (project) {
        dispatch(setcurrentProject(project));
      }
    }
  });

  function setChecked(taskId: number) {
    if (projectId) {
      const projId = +projectId;
      dispatch(toggleComplete({ projectId: projId, taskId }));
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{currentProject.title}</h3>
        <p className={styles.description}>{currentProject.description}</p>
        <h4 className={styles.taskTitle}>Task list</h4>
        <ul className={styles.tasksList}>
          {currentProject.tasks.map(({ taskId, text, completed }) => (
            <li key={taskId} className={styles.taskItem}>
              <input
                className={styles.taskCheckbox}
                type='checkbox'
                checked={completed}
                onChange={() => setChecked(taskId)}
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
