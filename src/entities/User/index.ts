export { userReducer, userActions } from './model/slice/userSlice';
export { UserRole } from './model/consts/consts';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors';

export type { User, UserSchema } from './model/types/user';
