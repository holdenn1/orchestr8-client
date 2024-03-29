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
  const { tasks } = useAppSelector((state) => state.task);
  const { projects } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const { projectId, list } = useParams();

  useEffect(() => {
    dispatch(setTasksCount(null));
  }, [projectId]);

  useEffect(() => {
    if (projectId) {
      dispatch(getTasksCountAction({ projectId }));
    }
  }, [tasks]);

  useEffect(() => {
    if (projectId) {
      if (list) {
        const project = projects.find((project) => project.id === +projectId);
        if (project) setCurrentProject(project);
      } 
    }
  }, [projectId, projects]);

  return (
    <>
      <ProjectsSection />
      {projectId && <TasksSection currentProject={currentProject} />}
    </>
  );
}

export default ProjectsInfo;
