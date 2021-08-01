import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  user: IPost[];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getAllUsersById(id).subscribe(value => this.user = value);

    });
  }

  ngOnInit(): void {
  }

}
