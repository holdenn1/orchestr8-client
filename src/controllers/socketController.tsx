import { BASE_URL } from '@/api';
import { useEffect } from 'react';
import { Manager } from 'socket.io-client';
import { NotificationType, ProjectData, TaskData, UpdateMemberRole } from './types';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import {
  addForeignProject,
  removeForeignProject,
  updateForeignProject,
  updateMemberRoleToForeignProject,
  updateOwnProject,
  updateStatusForeignProject,
} from '@/store/slices/projectSlice';
import { getForeignProjectsCountAction } from '@/store/actions/projectsActions/getForeignProjectsCount';
import { removeTask, setTask, updateTask } from '@/store/slices/taskSlice';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function SocketController() {
  const { user } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();
  const { id: userId } = useAuth();
  const navigate = useNavigate();

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
    socket.on(NotificationType.UPDATE_MEMBER_ROLE, handleUpdateMemberRole);
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleProjectCreate = (data: ProjectData) => {
    if ((window as any)?.socket?.id === data.socketId) return;
    if (data.payload.members.some((member) => member.id === user.id)) {
      dispatch(addForeignProject(data.payload));
    }
  };

  const handleUpdateProject = (data: ProjectData) => {
    if ((window as any)?.socket?.id === data.socketId) return;

    if (data.payload.members.some((member) => member.id === user.id)) {
      dispatch(updateForeignProject(data.payload));
    } else {
      const url = location.href;

      dispatch(removeForeignProject(data.payload));
      if (url.includes('tasks') && data.payload.owner.id !== userId) {
        navigate('/profile/foreign/projects/all-projects');
      }
    }

    if (data.payload.owner.id === userId) {
      dispatch(updateOwnProject(data.payload));
    }
  };

  const handleUpdateMemberRole = (data: UpdateMemberRole) => {
    if ((window as any)?.socket?.id === data.socketId) return;
    dispatch(updateMemberRoleToForeignProject(data.payload));
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
    const url = location.href;

    if ((window as any)?.socket?.id === data.socketId) return;

    if (data.payload.members.some((member) => member.id === user.id)) {
      dispatch(removeForeignProject(data.payload));
    }

    if (url.includes('tasks')) {
      navigate('/profile/foreign/projects/all-projects');
    }
  };

  const handleTaskCreate = (data: TaskData) => {
    if ((window as any)?.socket?.id === data.socketId) return;
    dispatch(setTask(data.payload));
  };

  const handleRemoveTask = (data: TaskData) => {
    if ((window as any)?.socket?.id === data.socketId) return;

    dispatch(removeTask(data.payload.id));
  };

  const handleUpdateTask = (data: TaskData) => {
    if ((window as any)?.socket?.id === data.socketId) return;

    dispatch(updateTask(data.payload));
  };

  return null;
}

export default SocketController;
