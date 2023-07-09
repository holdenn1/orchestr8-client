import { useAppSelector } from '@/hooks/reduxHooks';
import './styles.scss';

function ProjectsInfo() {
  const { completedProjects, inProgresProjects, suspendedProjects, projects } =
    useAppSelector((state) => state.project);
  const profiles = [
    {
      id: 1,
      title: 'Total projects',
      style: 'totalProjects',
      countProjects: projects.length,
    },
    {
      id: 2,
      title: 'Completed',
      style: 'completed',
      countProjects: completedProjects.length,
    },
    {
      id: 3,
      title: 'In progress',
      style: 'inProgres',
      countProjects: inProgresProjects.length,
    },
    {
      id: 4,
      title: 'Suspended',
      style: 'suspended',
      countProjects: suspendedProjects.length,
    },
  ];
  return (
    <div className='profile-projects'>
      {profiles.map((project) => (
        <div key={project.id} className='profile-projects__project'>
          <h4 className='profile-projects__title'>{project.title}</h4>
          <span className={`profile-projects__${project.style} count`}>
            {project.countProjects}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProjectsInfo;
