import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;

  selectUser: any
  constructor(private activatedroute: ActivatedRoute, private router: Router) {
    this.activatedroute.data.subscribe(value => this.users = value.data)
  }

  ngOnInit(): void {

  }


  onSubmit(): void {
  this.router.navigate(['users/' + this.selectUser.id], {state: this.selectUser})
  }
}
