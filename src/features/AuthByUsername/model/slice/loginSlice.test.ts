import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/LoginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('111'),
        )).toEqual({ username: '111' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('111'),
        )).toEqual({ password: '111' });
    });

    test('test set isLoading', () => {
        const state: DeepPartial<LoginSchema> = { isLoading: false };
        expect(loginReducer(
            state as LoginSchema,
            loginByUsername.pending,
        )).toEqual({ isLoading: true });
    });
});
