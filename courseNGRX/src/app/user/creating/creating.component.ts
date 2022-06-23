import { CreateUser } from './../../store/user-actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.css']
})
export class CreatingComponent implements OnInit {

  user: FormGroup

  constructor(private formBuilder: FormBuilder, private store: Store) { 
    this.user = this.formBuilder.group({
      name: [''],
      age: [''],
      profile: ['']
    })
  }

  ngOnInit(): void {
  }

  addingUser() {
    this.store.dispatch(CreateUser({payload:this.user.value}));
  }

}
