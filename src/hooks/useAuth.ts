import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/store';
import { login, logout } from '@/store/Slice/authSlice';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const userLogin = (userData: any) => {
    dispatch(login(userData));
  };

  const userLogout = () => {
    dispatch(logout());
  };

  return {
    ...authState,
    login: userLogin,
    logout: userLogout
  };
};