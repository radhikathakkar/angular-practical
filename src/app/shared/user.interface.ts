export interface IUser{
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    password: string;
    dob: Date;
    token?: string;
}