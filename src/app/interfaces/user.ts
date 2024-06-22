export interface RegisterData extends User {
    password: string,
}

export interface User{
    username: string,
    firstName: string,
    lastName: string,
}

export interface LoginData {
    username: string,
    password: string
}
