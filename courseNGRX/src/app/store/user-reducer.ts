import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from './user-state';
import * as fromUsersAction from "../store/user-actions"
import { state } from '@angular/animations';


const _userReducer = createReducer(
    initialState,
    on(fromUsersAction.LoadUserSuccess, (state, {payload})=>(
        {...state, user:payload, error:''})
    
) {

}


export function userReducer(state = initialState, action: Action) {
    return _userReducer(state, action)
}
