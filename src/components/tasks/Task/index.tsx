import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { updateTaskAction } from '@/store/actions/tasksActions/updateTask';
import { ProjectTask } from '@/store/slices/types/taskSliceTypes';
import { notify } from '@/components/Toast';
import { removeTaskRequest } from '@/api/requests';

function Task() {
  const [currentTask, setCurrentTask] = useState<ProjectTask>();
  const { tasks } = useAppSelector((state) => state.task);
  const { projectId, taskId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCompleteTask = () => {
    if (taskId) {
      if (currentTask?.completed) {
        dispatch(updateTaskAction({ taskId, updateData: { completed: false } }));
        notify('The task is returned to work', 'success');
        navigate(`/profile/project/${projectId}/all-tasks`);
      } else {
        dispatch(updateTaskAction({ taskId, updateData: { completed: true } }));
        notify('The task is completed', 'success');
        navigate(`/profile/project/${projectId}/all-tasks`);
      }
    }
  };

  const handleRemoveTask = async () => {
    if (taskId) {
      await removeTaskRequest(taskId);
      notify('The task has been deleted', 'success');
      navigate(`/profile/project/${projectId}/all-tasks`);
    }
  };

  useEffect(() => {
    if (taskId) {
      const task = tasks.find((task) => task.id === +taskId);
      if (task) {
        setCurrentTask(task);
      }
    }
  }, [taskId]);

  return (
    <div className={styles.taskWrapper}>
      <div className={styles.btnWrapper}>
        <button className={styles.allTasksBtn} onClick={handleCompleteTask}>
          {currentTask?.completed ? 'Return to work' : 'Completed'}
        </button>
        <button onClick={handleRemoveTask} className={styles.completedTasksBtn}>
          Remove
        </button>
      </div>
      {tasks?.map(({ id, task }) => {
        if (id === +taskId!) {
          return (
            <div className={styles.taskWrapper} key={id}>
              <span>{task}</span>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Task;
