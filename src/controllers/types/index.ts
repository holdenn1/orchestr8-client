import { Project } from '@/store/slices/types/projectSliceTypes';
import { ProjectTask } from '@/store/slices/types/taskSliceTypes';
import { MemberRole } from '@/store/slices/types/userSliceTypes';

export enum NotificationType {
  CREATE_PROJECT = 'create_project',
  REMOVE_PROJECT = 'remove_project',
  UPDATE_PROJECT = 'update_project',
  UPDATE_PROJECT_STATUS = 'update_project_status',
  ADD_TASK = 'add_task',
  REMOVE_TASK = 'remove_task',
  UPDATE_TASK = 'update_task',
  UPDATE_MEMBER_ROLE = 'update_member_role',
}

export type UpdateMemberRole = {
  socketId: string;
  payload: UpdatedProjectAndUserRole;
};

export type UpdatedProjectAndUserRole = {
  projectId: number;
  memberId: number;
  memberRole: MemberRole;
};

export type ProjectData = {
  payload: Project;
  socketId: string;
};

export type TaskData = {
  payload: ProjectTask;
  socketId: string;
};
