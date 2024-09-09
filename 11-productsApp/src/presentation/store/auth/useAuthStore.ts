import {create} from 'zustand';
import {User} from '../../../domain/entities/user';
import {AuthStatus} from '../../../infrastructure/interfaces/auth.status';
import {authCheckStatus, authLogin} from '../../../actions/auth/auth';
import {StorageAdapter} from '../../../config/adapters/storage-adapter';

export interface AuthState {
  status: AuthStatus;
  user?: User;
  token?: string;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: 'checking',
  user: undefined,
  token: undefined,

  login: async (email: string, password: string) => {
    const resp = await authLogin(email, password);

    if (!resp) {
      set({status: 'unauthenticated', user: undefined, token: undefined});
      return false;
    }

    await StorageAdapter.setItem('token', resp.token);

    set({status: 'authenticated', user: resp.user, token: resp.token});
    return true;
  },

  checkStatus: async () => {
    const resp = await authCheckStatus();
    if (!resp) {
      set({status: 'unauthenticated', user: undefined, token: undefined});
      return;
    }

    await StorageAdapter.setItem('token', resp.token);

    set({status: 'authenticated', user: resp.user, token: resp.token});
  },

  logout: async () => {
    await StorageAdapter.removeItem('token');
    set({status: 'unauthenticated', user: undefined, token: undefined});
  },
}));
