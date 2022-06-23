import { state } from '@angular/animations';
import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { UserState } from './user-state';


export const storeKey = 'usersReducer';

export const getUsersfeatureState = createFeatureSelector<UserState>(storeKey);

export const getAllUsers = createSelector(
    getUsersfeatureState,
    (state: UserState) => state.users
)

export const getUserById = createSelector(
    getUsersfeatureState,
    (state: UserState) => state.user
)

export const getError = createSelector(
    getUsersfeatureState,
    (state: UserState) => state.error
)

export const getAllAdminUsers = createSelector(
    getUsersfeatureState,
    (state: UserState) => state.users.filter(x => x.profile === 'Administrador')
)

export const getAllSearchUsers = createSelector(
    getUsersfeatureState,
    (state: UserState, props:{perfile:string}) => state.users.filter(x => x.profile == props.perfile)
)