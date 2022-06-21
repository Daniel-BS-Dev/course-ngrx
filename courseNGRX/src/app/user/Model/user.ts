export interface User {
    id: number,
    name: string,
    age: number,
    profile: string
}

export interface Users extends Array<User> {}