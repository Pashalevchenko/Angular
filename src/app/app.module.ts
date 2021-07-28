import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import {routes} from "./routes/baseRoutes";
import { UserComponent } from './user/user.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PostComponent } from './post/post.component';
import { UserPostComponent } from './user-post/user-post.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    UserPostsComponent,
    PostComponent,
    UserPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
