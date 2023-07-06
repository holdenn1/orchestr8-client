import DotMenuIcon from '@/components/UI/DotMenuIcon';
import profileIcon from 'icons/icons8-male-user-100.png';
import './styles.scss'

function UserInfo() {
  return (
    <div className='profile-info'>
        <div>
          <p className='profile-info__greeting'>
            <span>Hello</span>
            <br />
            <span className='profile-info__user-name'>Lorem, ipsum.</span>
          </p>
        </div>
        <div className='profile-photo'>
          <img className='profile-photo__photo' src={profileIcon} alt='' />
          <div className='profile-photo__menu-wrapper'>
            <DotMenuIcon />
          </div>
        </div>
      </div>
  );
}

export default UserInfo;