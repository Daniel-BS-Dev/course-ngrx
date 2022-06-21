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

  constructor(private formBuilder: FormBuilder, private service: UserService) { 
    this.user = this.formBuilder.group({
      name: [''],
      age: [''],
      profile: ['']
    })
  }

  ngOnInit(): void {
  }

  addingUser() {
      this.service.createUser(this.user.value).subscribe(() => {
        console.log(this.user.value)
      })
  }

}
