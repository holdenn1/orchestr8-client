import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectsSection from './ProjectsSection';
import TasksSection from './TasksSection';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setTasksCount } from '@/store/slices/taskSlice';
import { getTasksCountAction } from '@/store/actions/tasksActions/getTasksCount';
import { Project } from '@/store/slices/types/projectSliceTypes';

function ProjectsInfo() {
  const [currentProject, setCurrentProject] = useState<Project>();
  const { tasks, tasksCount } = useAppSelector((state) => state.task);
  const { ownProjects } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const { projectId } = useParams();

  useEffect(() => {
    dispatch(setTasksCount({ completed: 0, totalCount: 0 }));
  }, [projectId]);

  useEffect(() => {
    if (projectId) {
      dispatch(getTasksCountAction({ projectId }));
    }
  }, [tasks]);

  useEffect(() => {
    if (projectId) {
      const project = ownProjects.find((project) => project.id === +projectId);
      if (project) setCurrentProject(project);
    }
  }, [tasks]);

  return (
    <>
      <ProjectsSection />
      {projectId && <TasksSection tasksCount={tasksCount} currentProject={currentProject} />}
    </>
  );
}

export default ProjectsInfo;
