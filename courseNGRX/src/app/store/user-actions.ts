import { User } from './../user/Model/user';
import { createAction, props } from '@ngrx/store';
import { Users } from '../user/Model/user';

export const enum userTypeAction {
  LOAD_USERS = '[LOAD_USERS] LOAD USERS',
  LOAD_USERS_SUCCESS = '[LOAD_USERS_SUCCESS] LOAD USERS SUCCESS',
  LOAD_USERS_FAIL = '[LOAD_USERS_FAIL] LOAD USERS FAIL',

  LOAD_USER = '[LOAD_USER] LOAD USER',
  LOAD_USER_SUCCESS = '[LOAD_USER_SUCCESS] LOAD USER SUCCESS',
  LOAD_USER_FAIL = '[LOAD_USER_FAIL] LOAD USER FAIL',

  CREATE_USER = '[CREATE_USER] CREATE USERS',
  CREATE_USER_SUCCESS = '[CREATE_USER_SUCCESS] CREATE USER SUCCESS',
  CREATE_USER_FAIL = '[CREATE_USER_FAIL] CREATE USER FAIL',

  UPDATE_USER = '[UPDATE_USER] UPDATE USER',
  UPDATE_USER_SUCCESS = '[UPDATE_USER_SUCCESS] UPDATE USER SUCCESS',
  UPDATE_USER_FAIL = '[UPDATE_USER_FAIL] UPDATE USER FAIL',

  DELETE_USER = '[DELETE_USER] DELETE USER',
  DELETE_USER_SUCCESS = '[DELETE_USER_SUCCESS] DELETE USER SUCCESS',
  DELETE_USER_FAIL = '[DELETE_USER_FAIL] DELETE USER FAIL',
}

// get all
export const LoadUsers = createAction(userTypeAction.LOAD_USERS);

export const LoadUsersSuccess = createAction(
  userTypeAction.LOAD_USERS_SUCCESS,
  props<{ payload: Users }>()
);

export const LoadUsersFail = createAction(
  userTypeAction.LOAD_USERS_FAIL,
  props<{ error: string }>()
);

// get by id
export const LoadUser = createAction(
    userTypeAction.LOAD_USER,
    props<{ payload: number }>()
);

export const LoadUserSuccess = createAction(
  userTypeAction.LOAD_USER_SUCCESS,
  props<{ payload: User }>()
);

export const LoadUserFail = createAction(
  userTypeAction.LOAD_USER_FAIL,
  props<{ error: string }>()
);

// new user
export const CreateUser = createAction(
    userTypeAction.CREATE_USER,
    props<{ payload: User }>()
);

export const CreateUserSuccess = createAction(
  userTypeAction.CREATE_USER_SUCCESS,
  props<{ payload: User }>()
);

export const CreateUserFail = createAction(
  userTypeAction.CREATE_USER_FAIL,
  props<{ error: string }>()
);

// update user
export const UpdateUser = createAction(
    userTypeAction.UPDATE_USER,
    props<{ payload: User }>()
);

export const UpdateUserSuccess = createAction(
  userTypeAction.UPDATE_USER_SUCCESS,
  props<{ payload: User }>()
);

export const UpdateUserFail = createAction(
  userTypeAction.UPDATE_USER_FAIL,
  props<{ error: string }>()
);

// delete user
export const DeleteUser = createAction(
    userTypeAction.DELETE_USER,
    props<{ payload: User }>()
);

export const DeleteUserSuccess = createAction(
  userTypeAction.DELETE_USER_SUCCESS,
  props<{ payload: User }>()
);

export const DeleteUserFail = createAction(
  userTypeAction.DELETE_USER_FAIL,
  props<{ error: string }>()
);
