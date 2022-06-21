import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User, Users } from './Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url = 'http://localhost:3000/users'

  private _refresh$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  getUsers(): Observable<Users>{
    return this.http.get<Users>(this.url).pipe(
      map((actions) => actions.sort((x, y) => this.orderById(x, y)))
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.url}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.delete<User>(url);
  }

  private orderById(x: User, y: User) {
    if (x.id! < y.id!) return 1;
    if (x.id! > y.id!) return -1;
    return 0;
  }
}
