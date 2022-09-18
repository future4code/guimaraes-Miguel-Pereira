export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER"
};

export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: UserRole
};

export interface UserInputDTO {
    name: string,
    email: string,
    password: string,
    role: UserRole
};

export interface LoginInputDTO {
    email: string,
    password: string
};

export interface EditUserInputDTO {
    id:string,
    name: string,
    email: string,
    password: string,
    role: UserRole
};
