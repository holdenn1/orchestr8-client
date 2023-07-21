import { useAppSelector } from '@/hooks/reduxHooks';
import './styles.scss';

function ProjectsInfo() {
  const profiles = [
    {
      id: 1,
      title: 'Total projects',
      style: 'totalProjects',
      countProjects: [0],
    },
    {
      id: 2,
      title: 'Completed',
      style: 'completed',
      countProjects: [0],
    },
    {
      id: 3,
      title: 'In progress',
      style: 'inProgres',
      countProjects: [0],
    },
    {
      id: 4,
      title: 'Suspended',
      style: 'suspended',
      countProjects: [0],
    },
  ];
  return (
    <div className='profile-projects'>
      {profiles.map((project) => (
        <div key={project.id} className='profile-projects__project'>
          <h4 className='profile-projects__title'>{project.title}</h4>
          <span className={`profile-projects__${project.style} count`}>{project.countProjects}</span>
        </div>
      ))}
    </div>
  );
}

export default ProjectsInfo;
