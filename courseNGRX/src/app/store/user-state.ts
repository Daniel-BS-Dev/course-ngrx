import { User} from './../user/Model/user';

export interface UserState{
    users: User[],
    user: User | null,
    error: string | ''
}

export const initialState: UserState = {
    user: null,
    users: [],
    error: ''
}

