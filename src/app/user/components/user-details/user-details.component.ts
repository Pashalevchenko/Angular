import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUser
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
   this.activatedRoute.params.subscribe(value => {
     this.user = this.router.getCurrentNavigation()?.extras.state as IUser
   })
  }

  ngOnInit(): void {
  }

}
