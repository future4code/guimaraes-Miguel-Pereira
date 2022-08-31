export type User = {
    id: string,
    name: string,
    email: string,
    password: string
};

export interface UserInputDTO {
    name: string,
    email: string,
    password: string
};