import './styles.scss';

function ProjectsInfo() {
  const profiles = [
    { id: 1, title: 'Total projects', style: 'totalProjects' },
    { id: 2, title: 'Completed', style: 'completed' },
    { id: 3, title: 'In progress', style: 'inProgres' },
    { id: 4, title: 'Suspended', style: 'suspended' },
  ];
  return (
    <div className='profile-projects'>
      {profiles.map((project) => (
        <div key={project.id} className='profile-projects__project'>
          <h4 className='profile-projects__title'>{project.title}</h4>
          <span className={`profile-projects__${project.style} count`}>135</span>
        </div>
      ))}
    </div>
  );
}

export default ProjectsInfo;
