import { UserComponent } from './../user.component';
import { Users } from './../Model/user';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private service: UserService) { }

  userList: Observable<Users> = this.service.getUsers()

  ngOnInit(): void {
  }

}
