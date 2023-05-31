import { 
    QueryFunction, 
    QueryKey, 
    MutationFunction, 
    UseQueryOptions, 
    UseMutationOptions, 
    useQueryClient, 
    useMutation, 
    useQuery } from "@tanstack/react-query";
import React from "react";

export interface ReactQueryAuthConfig<
    User,
    LoginCredentials
> {
    userFn: QueryFunction<User, QueryKey>;
    loginFn: MutationFunction<User, LoginCredentials>;
    logoutFn: MutationFunction<unknown, unknown>;
    userKey?: QueryKey;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}

export function configureAuth<
    User,
    Error,
    LoginCredentials
>(config: ReactQueryAuthConfig<User, LoginCredentials>) {
    const {
        userFn,
        userKey = ['authenticated-user'],
        loginFn,
        logoutFn,
    } = config;

    const useUser = (
        options?: Omit<
            UseQueryOptions<User, Error, User, QueryKey>,
            'queryKey' | 'queryFn'
        >
    ) => useQuery(userKey, userFn, options);

    const useLogin = (
        options?: Omit<
            UseMutationOptions<User, Error, LoginCredentials>,
            'mutationFn'
        >
    ) => {
        const queryClient = useQueryClient();

        const setUser = React.useCallback(
            (data: User) => queryClient.setQueryData(userKey, data),
            [queryClient]
        );

        return useMutation({
            mutationFn: loginFn,
            ...options,
            onSuccess: (user, ...rest) => {
                setUser(user);
                options?.onSuccess?.(user, ...rest);
            },
        });
    };

    const useLogout = (options?: UseMutationOptions<unknown, Error, unknown>) => {
        const queryClient = useQueryClient();

        const setUser = React.useCallback(
            (data: User | null) => queryClient.setQueryData(userKey, data),
            [queryClient]
        );

        return useMutation({
            mutationFn: logoutFn,
            ...options,
            onSuccess: (...args) => {
                setUser(null);
                options?.onSuccess?.(...args);
            },
        })
    }
    return {
        useUser,
        useLogin,
        useLogout,
    };
}
