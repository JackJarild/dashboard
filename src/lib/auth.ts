import {
    getUser,
    UserResponse,
    LoginCredentials,
    loginWithEmailAndPassword,
} from '@/features/auth';
import { storage } from '@/utils/storage';
import { configureAuth } from './authConfig';

const handleUserResponse = async (user: UserResponse): Promise<UserResponse> => {
    console.log('handleUserResponse', user)
    storage.setUser(user)
    storage.setToken(user.token)
    return user;
}

const userFn = async (): Promise<UserResponse | null> =>  {
    console.log('userFn')
    if (storage.getUser()) {
        const { id } = storage.getUser()
        const user = await getUser(id)

        console.log('userData', user)

        return user
    }
    console.log('userFn return null')
    return null
}

const loginFn = async (data: LoginCredentials) => {
    const response = await loginWithEmailAndPassword(data);
    const user = await handleUserResponse(response);
    return user;
}

const logoutFn = async () => {
    storage.clearToken();
    storage.clearUser();
}

export const { useUser, useLogin, useLogout } =
    configureAuth<UserResponse | null, any, LoginCredentials>({
        userFn,
        loginFn,
        logoutFn,
    });