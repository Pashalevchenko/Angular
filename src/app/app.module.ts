import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {PostComponent, PostDetailsComponent, PostsComponent} from './components';


let routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'posts/:id', component: PostDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
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
