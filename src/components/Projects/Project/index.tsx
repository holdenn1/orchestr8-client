import styles from './styles.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import { removeOwnProjectsRequest } from '@/api/requests';
import TaskNavigation from '@/components/menus/TaskNavigation';
import TaskList from '@/components/tasks/TaskList';
import { Project as ProjectType } from '@/store/slices/types/projectSliceTypes';
import { useAppSelector } from '@/hooks/reduxHooks';
import AddTaskForm from '@/components/forms/ProjectForm/AddTaskForm';
import Task from '@/components/tasks/Task';

function Project() {
  const { isAddTaskForm } = useAppSelector((state) => state.main);
  const [isMenu, setIsMenu] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectType>();
  const { allProjects } = useAppSelector((state) => state.project);
  const { projectId, tasks, taskId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (projectId) {
      const project = allProjects.find((project) => project.id === Number(projectId));
      if (project) {
        setCurrentProject(project);
      }
    }
  }, [projectId]);

  const deleteProject = async () => {
    if (projectId) {
      await removeOwnProjectsRequest(projectId);
      navigate('/profile/projects/all-projects');
    }
  };

  return (
    <div
      className={styles.projectWrapper}
      onClick={() => {
        setIsMenu(false);
      }}
    >
      <div className={styles.content}>
        <div
          className={styles.dotMenuWrapper}
          onClick={(e) => {
            e.stopPropagation();
            setIsMenu(!isMenu);
          }}
        >
          <DotMenuIcon />
        </div>
        <TaskNavigation deleteProject={deleteProject} isMenu={isMenu} />
        <h3 className={styles.title}>{currentProject?.title}</h3>
        <p className={styles.description}>{currentProject?.description}</p>
        {taskId ? (
          <Task />
        ) : (
          <>
            {!isAddTaskForm && (
              <h4 className={styles.taskTitle}>
                Task list ({tasks === 'all-tasks' ? 'All tasks' : 'Completed tasks'})
              </h4>
            )}
            {!isAddTaskForm ? <TaskList /> : <AddTaskForm />}
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
