import { BASE_URL } from '@/api';
import { useEffect } from 'react';
import { Manager } from 'socket.io-client';
import { NotificationType } from './types';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import {
  addForeignProject,
  removeForeignProject,
  updateForeignProject,
  updateStatusForeignProject,
} from '@/store/slices/projectSlice';
import { Project } from '@/store/slices/types/projectSliceTypes';
import { getForeignProjectsCountAction } from '@/store/actions/projectsActions/getForeignProjectsCount';
import { ProjectTask } from '@/store/slices/types/taskSliceTypes';
import { removeTask, setTask, updateTask } from '@/store/slices/taskSlice';

type ProjectData = {
  payload: Project;
  socketId: string;
};
type TaskData = {
  payload: ProjectTask;
  socketId: string;
};
function SocketController() {
  const { user } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const manager = new Manager(BASE_URL, {
      transports: ['websocket'],
    });
    const socket = manager.socket('/');
    (window as any).socket = socket;

    socket.on(NotificationType.CREATE_PROJECT, handleProjectCreate);
    socket.on(NotificationType.UPDATE_PROJECT, handleUpdateProject);
    socket.on(NotificationType.UPDATE_PROJECT_STATUS, handleUpdateProjectStatus);
    socket.on(NotificationType.REMOVE_PROJECT, handleRemoveProject);
    socket.on(NotificationType.ADD_TASK, handleTaskCreate);
    socket.on(NotificationType.REMOVE_TASK, handleRemoveTask);
    socket.on(NotificationType.UPDATE_TASK, handleUpdateTask);
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleProjectCreate = (data: ProjectData) => {
    if ((window as any)?.socket?.id === data.socketId) return;
    dispatch(addForeignProject(data.payload));
  };

  const handleUpdateProject = (data: ProjectData) => {
    if ((window as any)?.socket?.id === data.socketId) return;
    if (data.payload.members.some((member) => member.id === user.id)) {
      dispatch(updateForeignProject(data.payload));
    } else {
      dispatch(removeForeignProject(data.payload));
    }
  };

  const handleUpdateProjectStatus = (data: ProjectData) => {
    if ((window as any)?.socket?.id === data.socketId) return;
    dispatch(getForeignProjectsCountAction());
    if (data.payload.members.some((member) => member.id === user.id)) {
      dispatch(updateStatusForeignProject(data.payload));
    } else {
      dispatch(removeForeignProject(data.payload));
    }
  };

  const handleRemoveProject = (data: ProjectData) => {
    if ((window as any)?.socket?.id === data.socketId) return;
    if (data.payload.members.some((member) => member.id === user.id)) {
      dispatch(removeForeignProject(data.payload));
    }
  };

  const handleTaskCreate = (data: TaskData) => {
    if ((window as any)?.socket?.id === data.socketId) return;
    dispatch(setTask(data.payload));
  };

  const handleRemoveTask = (data: TaskData) => {
    if ((window as any)?.socket?.id === data.socketId) return;
    dispatch(removeTask(data.payload));
  };

  const handleUpdateTask = (data: TaskData) => {
    if ((window as any)?.socket?.id === data.socketId) return;
    
    dispatch(updateTask(data.payload));
  };

  return null;
}

export default SocketController;
