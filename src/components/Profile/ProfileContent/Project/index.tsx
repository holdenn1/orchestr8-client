import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import styles from './styles.module.scss';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setcurrentProject } from '@/store/slices/projectSlice';

function Project() {
  const { projects, currentProject } = useAppSelector((state) => state.project);
  const [allTasks, setAllTasks] = useState(true);
  const [completedTasks, setCompletedTasks] = useState(false);
  const dispatch = useAppDispatch();
  const { projectId } = useParams();

  const { taskId } = useParams();

  useEffect(() => {
    if (projectId) {
      const project = projects.find((proj) => proj.projectId === +projectId);
      if (project) {
        dispatch(setcurrentProject(project));
      }
    }
  }, [dispatch, projectId, projects]);

  function showAllTask() {
    setAllTasks(true);
    setCompletedTasks(false);
  }

  function showCompletedTasks() {
    setCompletedTasks(true);
    setAllTasks(false);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{currentProject.title}</h3>
        <p className={styles.description}>{currentProject.description}</p>
        {taskId ? (
          <>
            <Outlet />
          </>
        ) : (
          <>
            <div className={styles.btnWrapper}>
              <button onClick={showAllTask} className={styles.allTasksBtn}>
                All Tasks
              </button>
              <button onClick={showCompletedTasks} className={styles.completedTasksBtn}>
                Completed tasks
              </button>
            </div>
            <h4 className={styles.taskTitle}>Task list</h4>
            <ul className={styles.tasksList}>
              {currentProject.tasks.map(({ taskId, text, completed }) => {
                if (allTasks) {
                  return (
                    <Link
                      key={taskId}
                      to={`/profile/projects/${currentProject.projectId}/task/${taskId}`}
                    >
                      <li className={styles.taskItem}>
                        <span>{text}</span>
                      </li>
                    </Link>
                  );
                } else if (completedTasks) {
                  if (completed) {
                    return (
                      <Link
                        key={taskId}
                        to={`/profile/projects/${currentProject.projectId}/task/${taskId}`}
                      >
                        <li key={taskId} className={styles.taskItem}>
                          <span>{text}</span>
                        </li>
                      </Link>
                    );
                  }
                }
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
