import { Project } from '@/store/slices/types/projectSliceTypes';
import { TasksCountPayload } from '@/store/slices/types/taskSliceTypes';
import { Link, useParams } from 'react-router-dom';

type TasksSectionProps = {
  tasksCount: TasksCountPayload;
  currentProject: Project | undefined;
};

function TasksSection({ tasksCount, currentProject }: TasksSectionProps) {
  const { projectId, list } = useParams();

  const tasksList = [
    {
      id: 1,
      title: 'Total tasks',
      style: 'totalTask',
      count: tasksCount?.totalCount ?? 0,
      link: 'tasks-all',
    },
    {
      id: 2,
      title: 'Completed',
      style: 'completedTasks',
      count: tasksCount?.completed ?? 0,
      link: 'tasks-completed',
    },
  ];

  return (
    <div className='profile-nav-wrapper'>
      <h4 className='profile-nav-title' title={currentProject?.title}>
        Tasks for the project {currentProject?.title}
      </h4>
      <div className='profile-list'>
        {tasksList.map((task) => (
          <Link key={task.id} to={`/profile/${list}/project/${projectId}/${task.link}`}>
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
