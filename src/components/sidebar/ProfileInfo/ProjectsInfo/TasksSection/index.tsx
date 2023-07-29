import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { getTasksCountAction } from '@/store/actions/tasksActions/getTasksCount';
import { setTasksCount } from '@/store/slices/taskSlice';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function TasksSection() {
  const { tasks, tasksCount } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const { projectId } = useParams();

  const tasksList = [
    {
      id: 1,
      title: 'Total tasks',
      style: 'totalTask',
      count: tasksCount?.totalCount ?? 0,
      link: 'all-tasks',
    },
    {
      id: 2,
      title: 'Completed',
      style: 'completedTasks',
      count: tasksCount?.completed ?? 0,
      link: 'completed',
    },
  ];

  useEffect(() => {
    dispatch(setTasksCount({ completed: 0, totalCount: 0 }));
  }, [projectId]);

  useEffect(() => {
    if (projectId) {
      dispatch(getTasksCountAction({ projectId }));
    }
  }, [tasks]);

  return (
    <div className='profile-nav-wrapper'>
      <h4 className='profile-nav-title'>Tasks</h4>
      <div className='profile-list'>
        {tasksList.map((task) => (
          <Link key={task.id} to={`/profile/project/${projectId}/${task.link}`}>
            <div className='profile-list__item'>
              <h4 className='profile-list__title'>{task.title}</h4>
              <span className={`profile-list__${task.style} count`}>{task.count}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TasksSection;
