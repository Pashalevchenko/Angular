import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {UserPostsComponent} from "../components/user-posts/user-posts.component";
import {Routes} from "@angular/router";
import {UserDetailsComponent} from "../components/user-details/user-details.component";

export const routes: Routes = [
  {
    path: 'users', component: UsersComponent, children: [
      {path:':id' + '/userDetails', component: UserDetailsComponent},
      {path: ':id' + '/users-with-posts', component: UserPostsComponent},
    ]
  },
  {path: 'posts', component: PostsComponent},
]
