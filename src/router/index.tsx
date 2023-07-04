import App from '@/App';
import { createBrowserRouter } from 'react-router-dom';
import {  ErrorPage, MainPage, SignInPage, SignUpPage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },  
    ],
  },
]);
