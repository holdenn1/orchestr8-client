import './../styles.scss';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { getOwnProjectsCountAction } from '@/store/actions/projectsActions/getOwnProjectsCount';
import { getForeignProjectsCountAction } from '@/store/actions/projectsActions/getForeignProjectsCount';

function ProjectsSection() {
  const { ownProjects, ownProjectCount, foreignProjectCount, foreignProjects } = useAppSelector(
    (state) => state.project,
  );
  const { projectId } = useParams();
  const dispatch = useAppDispatch();

  const ownProjectsCount = [
    {
      id: 1,
      title: 'Total projects',
      style: 'totalProjects',
      countProjects: ownProjectCount?.totalCount ?? 0,
      link: 'all-projects',
    },
    {
      id: 2,
      title: 'Completed',
      style: 'completed',
      countProjects: ownProjectCount?.completed ?? 0,
      link: 'completed',
    },
    {
      id: 3,
      title: 'In progress',
      style: 'inProgres',
      countProjects: ownProjectCount?.['in-progress'] ?? 0,
      link: 'in-progress',
    },
    {
      id: 4,
      title: 'Suspended',
      style: 'suspended',
      countProjects: ownProjectCount?.suspend ?? 0,
      link: 'suspend',
    },
  ];

  const foreignProjectsCount = [
    {
      id: 1,
      title: 'Total projects',
      style: 'totalProjects',
      countProjects: foreignProjectCount?.totalCount ?? 0,
      link: 'all-projects',
    },
    {
      id: 2,
      title: 'Completed',
      style: 'completed',
      countProjects: foreignProjectCount?.completed ?? 0,
      link: 'completed',
    },
    {
      id: 3,
      title: 'In progress',
      style: 'inProgres',
      countProjects: foreignProjectCount?.['in-progress'] ?? 0,
      link: 'in-progress',
    },
    {
      id: 4,
      title: 'Suspended',
      style: 'suspended',
      countProjects: foreignProjectCount?.suspend ?? 0,
      link: 'suspend',
    },
  ];

  useEffect(() => {
    dispatch(getOwnProjectsCountAction());
  }, [ownProjects]);

  useEffect(() => {
    dispatch(getForeignProjectsCountAction());
  }, [foreignProjects]);

  return (
    <div className='profile-nav-wrapper'>
      <h4 className='profile-nav-title'>Own projects</h4>
      <div className='profile-list'>
        {ownProjectsCount.map((project) => (
          <Link key={project.id} to={`/profile/own/projects/${project.link}`}>
            <div className='profile-list__item'>
              <h4 className='profile-list__title'>{project.title}</h4>
              <span className={`profile-list__${project.style} count`}>{project.countProjects}</span>
            </div>
          </Link>
        ))}
      </div>
      {!projectId && (
        <>
          <h4 className='profile-nav-title'>Member in</h4>
          <div className='profile-list'>
            {foreignProjectsCount.map((project) => (
              <Link key={project.id} to={`/profile/foreign/projects/${project.link}`}>
                <div className='profile-list__item'>
                  <h4 className='profile-list__title'>{project.title}</h4>
                  <span className={`profile-list__${project.style} count`}>{project.countProjects}</span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectsSection;
