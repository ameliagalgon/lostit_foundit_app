import User from './models/user';

export interface AuthState {
    isInitialized: boolean;
    user?: User;
}