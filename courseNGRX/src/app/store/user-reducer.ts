import { Action, createReducer, on } from '@ngrx/store';
import { initialState } from './user-state';
import * as fromUsersAction from '../store/user-actions';

const _userReducer = createReducer(
  initialState,
  // get all
  on(fromUsersAction.LoadUsersSuccess, (state, { payload }) => ({
    ...state,
    users: payload,
    error: '',
  })),
  on(fromUsersAction.LoadUsersFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
  // get by id
  on(fromUsersAction.LoadUserSuccess, (state, { payload }) => ({
    ...state,
    user: payload,
    error: '',
  })),
  on(fromUsersAction.LoadUserFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
  // new user
  on(fromUsersAction.CreateUser, (state, { payload }) => ({
    ...state,
    users: [...state.users, payload],
    error: '',
  })),
  on(fromUsersAction.CreateUserFail, (state, { error }) => ({
    ...state,
    error: error,
  })),
  // update user
  on(fromUsersAction.UpdateUser, (state, { payload }) => ({
    ...state,
    users: [...state.users].map((row) => {
      if (row.id === payload.id) {
        return payload;
      } else {
        return row;
      }
    }),
  })),
  on(fromUsersAction.UpdateUserFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  //delete user
  on(fromUsersAction.DeleteUserSuccess, (state, { payload }) => ({
    ...state,
    users: [...state.users].filter((x) => x.id != payload.id),
  })),
  on(fromUsersAction.DeleteUserFail, (state, { error }) => ({
    ...state,
    error: error,
  }))
);

export function userReducer(state = initialState, action: Action) {
  return _userReducer(state, action);
}
