import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;
  constructor(private activatedroute: ActivatedRoute, private router: Router) {
    this.activatedroute.data.subscribe(value => this.users = value.data)
  }

  ngOnInit(): void {

  }

  onSubmit(): void {

  }
}
