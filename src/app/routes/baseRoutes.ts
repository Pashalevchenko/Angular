import {UsersComponent} from "../users/users.component";
import {PostsComponent} from "../posts/posts.component";
import {UserPostsComponent} from "../user-posts/user-posts.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: 'users', component: UsersComponent, children: [
      {path: ':id' + '/users-with-posts', component: UserPostsComponent}
    ]
  },
  {path: 'posts', component: PostsComponent},
]
