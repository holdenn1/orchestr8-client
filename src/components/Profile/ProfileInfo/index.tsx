import DotMenuIcon from '@/components/UI/DotMenuIcon';
import './styles.scss';
import profileIcon from 'icons/icons8-male-user-100.png';

function ProfileInfo() {
  const profiles = [
    { id: 1, title: 'Total projects', style: 'totalProjects' },
    { id: 2, title: 'Completed', style: 'completed' },
    { id: 3, title: 'In progress', style: 'inProgres' },
    { id: 4, title: 'Suspended', style: 'suspended' },
  ];

  return (
    <div className='wrapper'>
      <div className='profile-info'>
        <div>
          <p className='profile-info__greeting'>
            <span>Hello</span>
            <br />
            <span className='profile-info__user-name'>Ihor Ivliev</span>
          </p>
        </div>
        <div className='profile-photo'>
          <img className='profile-photo__photo' src={profileIcon} alt='' />
          <div className='profile-photo__menu-wrapper'>
            <DotMenuIcon />
          </div>
        </div>
      </div>
      <div className='profile-projects'>
        {profiles.map((project) => (
          <div key={project.id} className='profile-projects__project'>
            <h4 className='profile-projects__title'>{project.title}</h4>
            <span className={`profile-projects__${project.style} count`}>135</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileInfo;
