import styles from './styles.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
import { removeOwnProjectsRequest } from '@/api/requests';
import TaskNavigation from '@/components/menus/TaskNavigation';
import TaskList from '@/components/tasks/TaskList';
import { Project as ProjectType } from '@/store/slices/types/projectSliceTypes';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import AddTaskForm from '@/components/forms/ProjectForm/AddTaskForm';
import editIcon from 'icons/icons8-edit-48.png';
import Task from '@/components/tasks/Task';
import {
  setRecomendationMemberVisible,
  setSelectedMembersVisible,
  setShowEditTaskForm,
} from '@/store/slices/mainSlice';
import Members from '@/components/Members';

function OwnProject() {
  const { isAddTaskForm, isEditTaskForm, isShowMembers } = useAppSelector((state) => state.main);
  const { ownProjects, foreignProjects } = useAppSelector((state) => state.project);
  const [isMenu, setIsMenu] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectType>();
  const { projectId, tasks: status, taskId, list } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (projectId) {
      if (list === 'own') {
        const project = ownProjects.find((project) => project.id === Number(projectId));
        if (project) {
          setCurrentProject(project);
        }
      } else {
        const project = foreignProjects.find((project) => project.id === Number(projectId));
        if (project) {
          setCurrentProject(project);
        }
      }
    }
  }, [projectId, ownProjects, list]);

  const deleteProject = async () => {
    if (projectId) {
      const project = await removeOwnProjectsRequest(projectId);
      if (project) {
        navigate('/profile/own/projects/all-projects');
      }
    }
  };

  return (
    <div
      className={styles.projectWrapper}
      onClick={() => {
        setIsMenu(false);
      }}
    >
      <div
        onClick={() => {
          dispatch(setSelectedMembersVisible(false));
          dispatch(setRecomendationMemberVisible(false));
        }}
        className={styles.content}
      >
        <div
          className={styles.dotMenuWrapper}
          onClick={(e) => {
            e.stopPropagation();
            setIsMenu(!isMenu);
          }}
        >
          <DotMenuIcon />
        </div>
        {taskId && (
          <>
            {list === 'own' && (
              <img
                onClick={() => dispatch(setShowEditTaskForm(!isEditTaskForm))}
                className={styles.editIcon}
                src={editIcon}
                alt=''
              />
            )}
          </>
        )}
        <TaskNavigation deleteProject={deleteProject} isMenu={isMenu} />
        <h3 className={styles.title}>
          Owner {currentProject?.owner.firstName} {currentProject?.owner.lastName}
        </h3>
        <h3 className={styles.title}>{currentProject?.title}</h3>
        <p className={styles.description}>{currentProject?.description}</p>
        {!isShowMembers ? (
          <>
            {taskId ? (
              <Task />
            ) : (
              <>
                {!isAddTaskForm && (
                  <h4 className={styles.taskTitle}>
                    Task list ({status === 'all-tasks' ? 'All tasks' : 'Completed tasks'})
                  </h4>
                )}
                {!isAddTaskForm ? <TaskList /> : <AddTaskForm />}
              </>
            )}
          </>
        ) : (
          <Members />
        )}
      </div>
    </div>
  );
}

export default OwnProject;