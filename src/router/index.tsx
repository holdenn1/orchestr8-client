import App from '@/App';
import { createHashRouter } from 'react-router-dom';
import { ErrorPage, MainPage, ProfilePage, SignInPage, SignUpPage } from '@/pages';
import ProjectList from '@/components/Project/ProjectList';
import ProjectForm from '@/components/forms/ProjectForm';
import Project from '@/components/Project';
import Task from '@/components/Project/tasks/Task';
import AddTask from '@/components/Project/tasks/AddTask';
import CompletedTasks from '@/components/Project/tasks/CompletedTasks';
import ParticipantsProject from '@/components/Project/Members';
import AllTasks from '@/components/Project/tasks/AllTask';

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
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'projects',
            element: <ProjectList />,
          },
          {
            path: 'projects-form',
            element: <ProjectForm />,
          },
          {
            path: 'projects/:projectId',
            element: <Project />,
            children: [
              {
                path: 'task/:taskId',
                element: <Task />,
              },
              {
                path: 'all-tasks',
                element: <AllTasks />,
              },
              {
                path: 'add-task',
                element: <AddTask />,
              },
              {
                path: 'completed-tasks',
                element: <CompletedTasks />,
              },
              {
                path: 'participants-project',
                element: <ParticipantsProject />,
              },
            ],
          },
        ],
      },
    ],
  },
  
]);
