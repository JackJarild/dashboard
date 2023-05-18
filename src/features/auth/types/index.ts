export type AuthUser = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    bio: string;
    role: 'ADMIN' | 'USER';
  };

export type UserResponse = {
    id: number;
    firstName: string;
    lastName: string,
    email: string;
    companyId: number;
    phoneNumber: string;
    language: string;
    isActive: boolean;
    token: string;
}