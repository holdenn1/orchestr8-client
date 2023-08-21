import styles from './styles.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DotMenuIcon from '@/components/UI/DotMenuIcon';
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
import { fetchTasks } from '@/store/actions/tasksActions/fetchTasks';
import { useInView } from 'react-intersection-observer';
import { clearTaskList, setCurrentPageTaskList } from '@/store/slices/taskSlice';
import { MemberRole } from '@/store/slices/types/userSliceTypes';
import { useAuth } from '@/hooks/useAuth';

function Project() {
  const { isAddTaskForm, isEditTaskForm, isShowMembers } = useAppSelector((state) => state.main);
  const { projects } = useAppSelector((state) => state.project);
  const [isManager, setIsManager] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<ProjectType>();
  const { projectId, tasks: statusTask, taskId, list } = useParams();
  const [isMenu, setIsMenu] = useState(false);
  const { id: userId } = useAuth();
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (projectId) {
      if (list) {
        const project = projects.find((project) => project.id === Number(projectId));
        if (project) {
          const manager = project.members.some((member) => {
            if (member.id === userId) {
              if (member.role === MemberRole.PROJECT_MANAGER) return true;
            }
          });
          setIsManager(manager);
          setCurrentProject(project);
        }
      }
    }
  }, [projectId, projects, list]);

  useEffect(() => {
    dispatch(setCurrentPageTaskList(1));
    dispatch(clearTaskList());
  }, [statusTask, isAddTaskForm]);

  useEffect(() => {
    if (inView) {
      if (projectId && statusTask) {
        dispatch(
          fetchTasks({
            projectId,
            statusTask,
          }),
        );
      }
    }
  }, [inView, statusTask]);

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
            {(list === 'own' || isManager) && (
              <img
                onClick={() => dispatch(setShowEditTaskForm(!isEditTaskForm))}
                className={styles.editIcon}
                src={editIcon}
                alt=''
              />
            )}
          </>
        )}
        <TaskNavigation isMenu={isMenu} isManager={isManager} />
        <h3 className={styles.title}>
          Owner {currentProject?.owner.firstName} {currentProject?.owner.lastName}
        </h3>
        <h3 className={styles.title}>{currentProject?.title}</h3>
        <p className={styles.description}>{currentProject?.description}</p>
        {!isShowMembers ? (
          <>
            {taskId ? (
              <Task isManager={isManager} />
            ) : (
              <>
                {!isAddTaskForm && (
                  <h4 className={styles.taskTitle}>
                    Task list ({statusTask === 'tasks-all' ? 'All tasks' : 'Completed tasks'})
                  </h4>
                )}
                {!isAddTaskForm ? <TaskList observeRef={ref} /> : <AddTaskForm />}
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

export default Project;
