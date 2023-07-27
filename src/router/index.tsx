import App from '@/App';
import { createHashRouter } from 'react-router-dom';
import { ErrorPage, MainPage, ProfilePage, SignInPage, SignUpPage } from '@/pages';
import ProjectForm from '@/components/forms/ProjectForm';
import Task from '@/components/tasks/Task';
import Members from '@/components/Members';
import { Project, ProjectList } from '@/components/Projects';
import AddTaskForm from '@/components/forms/ProjectForm/AddTaskForm';

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
        path: 'profile',
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
              {
                path: 'participants-project',
                element: <Members />,
              },
            ],
          },
          {
            path: 'projects-form',
            element: <ProjectForm />,
          },
          {
            path: 'project/:projectId/add-task-form',
            element: <AddTaskForm />,
          },
        ],
      },
    ],
  },
]);
