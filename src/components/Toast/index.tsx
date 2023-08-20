import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Status = 'error' | 'success' | 'warning';

export const notify = (text: string, status: Status) => {
  switch (status) {
    case 'error': {
      toast.error(`${text}`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      break;
    }
    case 'success': {
      toast.success(`${text}`, {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      break;
    }
    case 'warning': {
      toast.warning(`${text}`, {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      break;
    }
  }
};
