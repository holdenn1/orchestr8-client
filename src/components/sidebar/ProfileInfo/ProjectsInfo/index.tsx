import { useParams } from 'react-router-dom';
import ProjectsSection from './ProjectsSection';
import TasksSection from './TasksSection';

function ProjectsInfo() {
  const { projectId } = useParams();

  return (
    <>
      <ProjectsSection />
      {projectId && <TasksSection />}
    </>
  );
}

export default ProjectsInfo;
