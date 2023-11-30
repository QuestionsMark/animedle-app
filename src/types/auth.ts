import { User } from "./user";

export namespace Auth {
    export enum SecureStoreKey {
        Auth = 'authentication-token',
    }

    // Response
    export interface Response {
        token: string;
        user: User.ContextValue;
    }
}