import { useAppDispatch } from '@/hooks/reduxHooks';
import { logoutUser } from '@/store/actions/logoutUser';
import { useNavigate } from 'react-router-dom';
import MainWrapper from 'ui/wrappers/MainWrapper';

function AccountPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <MainWrapper>
      Account
      <button onClick={() => dispatch(logoutUser({ navigate }))}>logout</button>
    </MainWrapper>
  );
}

export default AccountPage;
