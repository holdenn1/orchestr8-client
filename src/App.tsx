import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { checkAuth } from './store/actions/authActions/checkAuth';
import { logoutUser } from './store/actions/authActions/logoutUser';
import SocketController from './controllers/socketController';
import globalRouter from './router/globalRouter';

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);
  const navigate = useNavigate();
  globalRouter.navigate = navigate

  useEffect(() => {
    if (localStorage.getItem('refreshToken')) {
      dispatch(checkAuth({ navigate }));
    } else {
      dispatch(logoutUser({ navigate }));
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Outlet />
      {!!user.id && <SocketController />}
    </>
  );
}

export default App;
