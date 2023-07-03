import { useAppSelector } from '@/hooks/reduxHooks';

export function useAuth() {
  const { userId, email, roles } = useAppSelector((state) => state.account.user);

  return {
    isAuth: !!email,
    userId,
    email,
    roles,
  };
}
