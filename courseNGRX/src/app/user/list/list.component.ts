import { getAllSearchUsers } from './../../store/user-selector';
import { LoadUsers } from './../../store/user-actions';
import { User } from './../Model/user';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllUsers } from 'src/app/store/user-selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private store: Store) { }

  userList: Observable<User[]> = this.store.select(getAllUsers)
 
  test!: User[]

  ngOnInit(): void {
    this.store.dispatch(LoadUsers());

    this.store.select(getAllSearchUsers,{perfile:'administrador'})
    .subscribe((x: User[]) => {
      this.test = x;
    })
  }

}
