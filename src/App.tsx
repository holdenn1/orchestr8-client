import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from './hooks/reduxHooks';
import { checkAuth } from './store/actions/authActions/checkAuth';
import { logoutUser } from './store/actions/authActions/logoutUser';

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
    </>
  );
}

export default App;
