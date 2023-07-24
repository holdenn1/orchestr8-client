import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/reduxHooks';
import './styles.scss';

function ProjectsInfo() {
  const [projects, setProjects] = useState({
    Completed: 0,
    'In Progress': 0,
    Suspend: 0,
  });
  const { allProjects } = useAppSelector((state) => state.project);
  
  const profiles = [
    {
      id: 1,
      title: 'Total projects',
      style: 'totalProjects',
      countProjects: allProjects?.length,
    },
    {
      id: 2,
      title: 'Completed',
      style: 'completed',
      countProjects: projects.Completed,
    },
    {
      id: 3,
      title: 'In progress',
      style: 'inProgres',
      countProjects: projects['In Progress'],
    },
    {
      id: 4,
      title: 'Suspended',
      style: 'suspended',
      countProjects: projects.Suspend,
    },
  ];

  useEffect(() => {
    const projectCountByStatus = allProjects.reduce((acc: any, item) => {
      const { status } = item;

      if (acc[status]) {
        acc[status] += 1;
      } else {
        acc[status] = 1;
      }

      return acc;
    }, {});

    setProjects(projectCountByStatus);
  }, [allProjects]);

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
