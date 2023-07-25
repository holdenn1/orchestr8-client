import App from '@/App';
import { createHashRouter } from 'react-router-dom';
import { ErrorPage, MainPage, ProfilePage, SignInPage, SignUpPage } from '@/pages';
import ProjectForm from '@/components/forms/ProjectForm';
import Task from '@/components/tasks/Task';
import AllTasks from '@/components/tasks/AllTask';
import AddTask from '@/components/tasks/AddTask';
import CompletedTasks from '@/components/tasks/CompletedTasks';
import Members from '@/components/Members';
import {
  AllProjects,
  CompletedProjects,
  InProgressProjects,
  Project,
  SuspendProjects,
} from '@/components/Projects';

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
            path: 'all-projects',
            element: <AllProjects />,
          },
          {
            path: 'completed',
            element: <CompletedProjects />,
          },
          {
            path: 'in-progress',
            element: <InProgressProjects />,
          },
          {
            path: 'suspend',
            element: <SuspendProjects />,
          },
          {
            path: 'projects-form',
            element: <ProjectForm />,
          },
          {
            path: 'project/:projectId',
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
                element: <Members />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
