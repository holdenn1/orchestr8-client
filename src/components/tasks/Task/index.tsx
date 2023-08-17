import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { updateTaskAction } from '@/store/actions/tasksActions/updateTask';
import { ProjectTask } from '@/store/slices/types/taskSliceTypes';
import { notify } from '@/components/Toast';
import { removeTaskRequest } from '@/api/requests';
import EditProjectAndTaskForm from '@/components/forms/ProjectForm/EditProjectAndTaskForm';
import { setShowEditTaskForm } from '@/store/slices/mainSlice';
import EmptyList from '@/components/errors/listError/EmptyList';
import { removeTask } from '@/store/slices/taskSlice';

function Task() {
  const [currentTask, setCurrentTask] = useState<ProjectTask>();
  const { tasks } = useAppSelector((state) => state.task);
  const { isEditTaskForm } = useAppSelector((state) => state.main);
  const { projectId, taskId, list } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCompleteTask = () => {
    if (taskId) {
      if (currentTask?.completed) {
        if (projectId && list) {
          dispatch(updateTaskAction({ taskId, updateData: { completed: false }, navigate, projectId, list }));
        }
        notify('The task is returned to work', 'success');
      } else {
        if (projectId && list) {
          dispatch(updateTaskAction({ taskId, updateData: { completed: true }, navigate, projectId, list }));
        }
        notify('The task is completed', 'success');
      }
    }
  };

  const handleRemoveTask = async () => {
    if (taskId) {
      const data = await removeTaskRequest(taskId);
      dispatch(removeTask(+taskId));
      if (data) {
        notify('The task has been deleted', 'success');
        navigate(`/profile/${list}/project/${projectId}/tasks-all`);
      }
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

  useEffect(() => {
    dispatch(setShowEditTaskForm(false));
  }, []);

  useEffect(() => {
    if (taskId) {
      const isCurrentTask = tasks.some((task) => task.id === +taskId);
      if (!isCurrentTask) {
        navigate(`/profile/${list}/project/${projectId}/tasks-all/`);
      }
    }
  }, [tasks.length]);

  return (
    <div className={styles.taskWrapper}>
      {isEditTaskForm ? (
        <>{list === 'own' && <EditProjectAndTaskForm />}</>
      ) : (
        <>
          {list === 'own' && (
            <div className={styles.btnWrapper}>
              <button className={styles.allTasksBtn} onClick={handleCompleteTask}>
                {currentTask?.completed ? 'Return to work' : 'Completed'}
              </button>
              <button onClick={handleRemoveTask} className={styles.completedTasksBtn}>
                Remove
              </button>
            </div>
          )}
          {taskId ? (
            <>
              {tasks?.map(({ id, task }) => {
                if (id === +taskId) {
                  return (
                    <div className={styles.taskWrapper} key={id}>
                      <span>{task}</span>
                    </div>
                  );
                }
              })}
            </>
          ) : (
            <EmptyList>Something wrong way</EmptyList>
          )}
        </>
      )}
    </div>
  );
}

export default Task;
