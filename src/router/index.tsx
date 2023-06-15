import App from '@/App';
import { createBrowserRouter } from 'react-router-dom';
import { AccountPage, ErrorPage, HomePage, SignInPage, SignUpPage } from '@/pages';

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
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
      {
        path: 'account',
        element: <AccountPage />,
      },
    ],
  },
]);
