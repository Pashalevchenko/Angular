import { Component } from '@angular/core';
import {Router} from "@angular/router";

import {IPost} from "../../models";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  post: IPost;

  constructor(private router: Router) {
    this.post = this.router.getCurrentNavigation()?.extras.state as IPost;
  }
}
