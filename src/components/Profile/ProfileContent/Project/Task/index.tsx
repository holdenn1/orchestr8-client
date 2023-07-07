import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { removeTask, toggleComplete } from '@/store/slices/projectSlice';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { notify } from '@/components/Toast';

function Task() {
  const { projectId, taskId } = useParams();
  const { currentProject } = useAppSelector((state) => state.project);
  const [isRemoveTask, setIsRemoveTask] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function setChecked(taskId: number) {
    if (projectId) {
      const projId = +projectId;
      dispatch(toggleComplete({ projectId: projId, taskId }));
      navigate(`/profile/projects/${projectId}`);
      notify('The task was been completed', 'success');
    }
  }

  function deleteTask() {
    if (projectId && taskId) {
      const proj = +projectId;
      const task = +taskId;
      dispatch(removeTask({ taskId: task, projectId: proj }));
      setIsRemoveTask(true);
      navigate(`/profile/projects/${projectId}`);
      notify('The task has been deleted', 'success');
    }
  }
  return (
    <div className={styles.wrapper}>
      {!isRemoveTask && (
        <div className={styles.btnWrapper}>
          <button onClick={() => setChecked(+taskId!)} className={styles.allTasksBtn}>
            Сompleted
          </button>
          <button onClick={deleteTask} className={styles.completedTasksBtn}>
            Remove
          </button>
        </div>
      )}
      {currentProject.tasks.map((task) => {
        if (task.taskId === +taskId!) {
          return (
            <div className={styles.taskWrapper} key={task.taskId}>
              <span>{task.text}</span>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Task;
