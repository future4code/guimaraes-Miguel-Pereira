import { UserRole } from "./User";

export type AuthenticationData = {
    id: string,
    role: UserRole | undefined
};