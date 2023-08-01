import App from '@/App';
import { createHashRouter } from 'react-router-dom';
import { ErrorPage, MainPage, ProfilePage, SignInPage, SignUpPage } from '@/pages';
import ProjectForm from '@/components/forms/ProjectForm';
import Task from '@/components/tasks/Task';
import { Project, ProjectList } from '@/components/Projects';

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
      {
        path: 'profile/:list',
        element: <ProfilePage />,
        children: [
          {
            path: 'projects/:status',
            element: <ProjectList />,
          },
          {
            path: 'project/:projectId/:tasks',
            element: <Project />,
            children: [
              {
                path: 'task/:taskId',
                element: <Task />,
              },
            ],
          },
          {
            path: 'projects-form',
            element: <ProjectForm />,
          },
        ],
      },
    ],
  },
]);
