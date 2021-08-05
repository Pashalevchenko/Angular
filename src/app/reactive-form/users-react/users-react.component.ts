import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users-react',
  templateUrl: './users-react.component.html',
  styleUrls: ['./users-react.component.scss']
})
export class UsersReactComponent implements OnInit {


  users: any
  form: FormGroup = new  FormGroup({
    user: new FormControl('')

  })
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(value => this.users = value.data)
  }

  ngOnInit(): void {
  }


  save(): void {
    this.router.navigate(['users/reactComp/' + this.form.value.user.id], {state: this.form.value.user})
    console.log(this.form.value.user.id)
  }
}
