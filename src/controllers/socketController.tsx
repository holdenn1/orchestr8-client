import { BASE_URL } from '@/api';
import { useEffect } from 'react';
import { Manager } from 'socket.io-client';
import { NotificationType } from './types';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { addToProjectNotification, removeForeignProject } from '@/store/slices/projectSlice';
import { Member, Project, ProjectCountPayload } from '@/store/slices/types/projectSliceTypes';
import { getForeignProjectsCountAction } from '@/store/actions/projectsActions/getForeignProjectsCount';

type ProjectData = {
  payload: Project;
  socketId: string;
};

function SocketController() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);

  useEffect(() => {
    const manager = new Manager(BASE_URL, {
      transports: ['websocket'],
    });
    const socket = manager.socket('/');
    (window as any).socket = socket;

    socket.on(NotificationType.CREATE_PROJECT, handleProjectCreate);
    socket.on(NotificationType.UPDATE_COUNT_PROJECT, handleUpdateCountProject);
    socket.on(NotificationType.REMOVE_PROJECT, handleRemoveProject);
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleProjectCreate = (data: ProjectData) => {
    console.log(data);

    if ((window as any)?.socket?.id === data.socketId) return;

    if (data.payload.members.some((member) => member.id === user.id)) {
      dispatch(addToProjectNotification(data.payload.status as keyof ProjectCountPayload));
    }
  };

  const handleUpdateCountProject = (data: { socketId: string }) => {
    if ((window as any)?.socket?.id === data.socketId) return;

    dispatch(getForeignProjectsCountAction());
  };

  const handleRemoveProject = (data: ProjectData) => {
    console.log(data);
    if ((window as any)?.socket?.id === data.socketId) return;

    if (data.payload.members.some((member) => member.id === user.id)) {
      dispatch(getForeignProjectsCountAction());
      dispatch(removeForeignProject(data.payload));
    }
  };

  return null;
}

export default SocketController;
