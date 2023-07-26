import './styles.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { getProjectsCountAction } from '@/store/actions/projectsActions/getProjectsCount';

function ProjectsInfo() {
  const { allProjects, projectCount } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();

  const profiles = [
    {
      id: 1,
      title: 'Total projects',
      style: 'totalProjects',
      countProjects: projectCount?.totalCount ?? 0,
      link: 'all-projects',
    },
    {
      id: 2,
      title: 'Completed',
      style: 'completed',
      countProjects: projectCount?.completed ?? 0,
      link: 'completed',
    },
    {
      id: 3,
      title: 'In progress',
      style: 'inProgres',
      countProjects: projectCount?.['in-progress'] ?? 0,
      link: 'in-progress',
    },
    {
      id: 4,
      title: 'Suspended',
      style: 'suspended',
      countProjects: projectCount?.suspend ?? 0,
      link: 'suspend',
    },
  ];

  useEffect(() => {
    dispatch(getProjectsCountAction());
  }, [allProjects]);

  return (
    <div className='profile-projects'>
      {profiles.map((project) => (
        <Link key={project.id} to={`/profile/projects/${project.link}`}>
          <div className='profile-projects__project'>
            <h4 className='profile-projects__title'>{project.title}</h4>
            <span className={`profile-projects__${project.style} count`}>{project.countProjects}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectsInfo;
