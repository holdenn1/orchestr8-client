import App from '@/App';
import { createHashRouter } from 'react-router-dom';
import { ErrorPage, MainPage, ProfilePage, SignInPage, SignUpPage } from '@/pages';
import Project from '@/components/Profile/ProfileContent/ProjectList';
import ProjectForm from '@/components/forms/ProjectForm';

export const router = createHashRouter([
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
  {
    path: 'profile',
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'projects',
        element: <Project />,
      },
      {
        path: 'projects-form',
        element: <ProjectForm/>,
      },
    ],
  },
]);
