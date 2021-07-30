import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

import {IPost} from "../../models";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input()
  post: IPost;

  constructor(private router: Router) { }

  postDetails(): void {
    this.router.navigate(['posts',this.post.id], {state: this.post});
  }
}
