import { User, Users } from './../user/Model/user';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromUsersAction from './user-actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private service: UserService) {}

  loadUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromUsersAction.userTypeAction.LOAD_USERS),
      exhaustMap(() =>
        this.service.getUsers().pipe(
          map((payload: Users) =>
            fromUsersAction.LoadUsersSuccess({ payload })
          ),
          catchError((error) => of(fromUsersAction.LoadUsersFail({ error })))
        )
      )
    )
  );

  LoadUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromUsersAction.userTypeAction.LOAD_USER),
      exhaustMap((refresh: any) =>
        this.service.getUserById(refresh.payload).pipe(
          map(
            (payload: User) => fromUsersAction.LoadUserSuccess({ payload }),
            catchError((error) => of(fromUsersAction.LoadUserFail({ error })))
          )
        )
      )
    )
  );

  LoadCreate$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromUsersAction.userTypeAction.CREATE_USER),
      exhaustMap((refresh: any) =>
        this.service.createUser(refresh.payload).pipe(
          map(
            (payload: User) => fromUsersAction.CreateUserSuccess({ payload }),
            catchError((error) => of(fromUsersAction.CreateUserFail({ error })))
          )
        )
      )
    )
  );

  LoadUpdate$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromUsersAction.userTypeAction.UPDATE_USER),
      exhaustMap((refresh: any) =>
        this.service.updateUser(refresh.payload).pipe(
          map(
            (payload: User) => fromUsersAction.UpdateUserSuccess({ payload }),
            catchError((error) => of(fromUsersAction.UpdateUserFail({ error })))
          )
        )
      )
    )
  );

  LoadDelete$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromUsersAction.userTypeAction.DELETE_USER),
      exhaustMap((refresh: any) =>
        this.service.deleteUser(refresh.payload).pipe(
          map(
            () =>
              fromUsersAction.DeleteUserSuccess({ payload: refresh.payload }),
            catchError((error) => of(fromUsersAction.DeleteUserFail({ error })))
          )
        )
      )
    )
  );
}
