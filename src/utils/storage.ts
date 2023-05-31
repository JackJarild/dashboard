import { UserResponse } from "@/features/auth";

const storagePrefix = 'dashboard_';

export const storage = {
  getToken: () => JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string),
  setToken: (token: string) => window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token)),
  clearToken: () => window.localStorage.removeItem(`${storagePrefix}token`),
  // Remove?
  getUser: (): UserResponse => JSON.parse(window.localStorage.getItem(`${storagePrefix}user`) as string),
  setUser: (user: UserResponse) => window.localStorage.setItem(`${storagePrefix}user`, JSON.stringify(user)),
  clearUser: () => window.localStorage.removeItem(`${storagePrefix}user`),
};
