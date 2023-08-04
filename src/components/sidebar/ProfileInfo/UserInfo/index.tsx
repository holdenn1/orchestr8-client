import styles from './styles.module.scss';
import profileIcon from 'icons/icons8-male-user-100.png';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { ChangeEvent } from 'react';
import { getUserRequest, uploadAvatar } from '@/api/requests';
import { setUser } from '@/store/slices/userSlice';
import { User } from '@/store/slices/types/userSliceTypes';

function UserInfo() {
  const { user } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  const handleFileInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      await uploadAvatar(file);
      const { data }: { data: User } = await getUserRequest();
      dispatch(setUser(data));
    }
  };

  return (
    <div className={styles.profileInfo}>
      <div>
        <p className={styles.greeting}>
          <span>Hello</span>
          <br />
          <span className={styles.userName}>
            {user?.firstName} {user?.lastName}
          </span>
        </p>
      </div>
      <div className={styles.profilePhotoWrapper}>
        <input
          className={styles.photoInput}
          type='file'
          accept='.jpg,.png,.jpeg'
          onChange={(e) => handleFileInputChange(e)}
        />
        <img className={styles.photo} src={user.photo ?? profileIcon} alt='' />
      </div>
    </div>
  );
}

export default UserInfo;
