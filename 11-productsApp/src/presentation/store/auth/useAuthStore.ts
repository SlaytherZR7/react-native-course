import {create} from 'zustand';
import {User} from '../../../domain/entities/user';
import {AuthStatus} from '../../../infrastructure/interfaces/auth.status';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {authLogin} from '../../../actions/auth/auth';

export interface AuthState {
  status: AuthStatus;
  user?: User;
  token?: string;

  login: (email: string, password: string) => Promise<boolean>;
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
    set({status: 'authenticated', user: resp.user, token: resp.token});
    return true;
  },
}));
