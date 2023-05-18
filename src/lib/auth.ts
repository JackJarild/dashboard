import { configureAuth } from 'react-query-auth';

import {
    loginWithEmailAndPassword,
    //getUser,
    registerWithEmailAndPassword,
    UserResponse,
    LoginCredentialsDTO,
    RegisterCredentialsDTO,
    AuthUser,
} from '@/features/auth';
import { storage } from '@/utils/storage';


async function handleUserResponse(data: UserResponse) {
    //const { jwt, user } = data;
    storage.setToken(data.token);
    const user: AuthUser = {
        email: data.email,
        firstName: data.firstName,
        id: data.id,
        lastName: data.lastName,
        bio: '',
        role: 'ADMIN'
    }
    return user;
}

async function userFn() {
    if (storage.getToken()) {
        //const data = await getUser();
        console.log('loadUser called')
        const user: AuthUser = {
            email: 'jack.jarild@tofindout.se',
            firstName: 'Jack',
            id: 1,
            lastName: 'Järild',
            bio: '',
            role: 'ADMIN'
        }
        return user;
        //return data;
    }
    return null;
}

async function loginFn(data: LoginCredentialsDTO) {
    const response = await loginWithEmailAndPassword(data);
    const user = await handleUserResponse(response);
    return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
    const response = await registerWithEmailAndPassword(data);
    const user = await handleUserResponse(response);
    return user;
}

async function logoutFn() {
    storage.clearToken();
    window.location.assign(window.location.origin as unknown as string);
}


// export const { AuthProvider, useAuth } = initReactQueryAuth<
//     AuthUser | null,
//     unknown,
//     LoginCredentialsDTO
// >(authConfig);
export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn,
    loginFn,
    registerFn,
    logoutFn,
  });
