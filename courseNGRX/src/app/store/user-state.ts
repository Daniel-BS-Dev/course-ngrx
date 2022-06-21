import { Users, User} from './../user/Model/user';

export interface UserState{
    users: Users,
    user: User | null,
    error: string | ''
}

export const initialState = {
    users: [],
    user: null,
    error: ''
}

