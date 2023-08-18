import { Project } from '@/store/slices/types/projectSliceTypes';
import { useAuth } from './useAuth';
import { MemberRole } from '@/store/slices/types/userSliceTypes';
import { useAppSelector } from './reduxHooks';
import { useState } from 'react';

type UseRoleProps = {
  projectId: string | undefined;
  list: string | undefined;
};

export function useRole({ projectId, list }: UseRoleProps) {
 
  const { id } = useAuth();



  const isManager = currentProject?.members.some((member) => {
    if (member.id == id) {
      if (member.role === MemberRole.PROJECT_MANAGER) return true;
    }
  });

  return {
    isManager
  };
}
