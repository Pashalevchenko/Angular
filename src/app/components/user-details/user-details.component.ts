import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUser
  constructor(private  router: Router) {
    this.user = this.router.getCurrentNavigation()?.extras.state as IUser


  }

  ngOnInit(): void {
  }

  backBtn() {
    history.back()
  }
}
