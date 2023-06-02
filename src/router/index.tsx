import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import HomePage from "@/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
