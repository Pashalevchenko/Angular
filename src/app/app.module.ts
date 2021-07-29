import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UserDeactivatorService} from "./models/user-deactivator.service";

let routes: Routes = [
  {path: '', component: UsersComponent, canDeactivate: [UserDeactivatorService]},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'users', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
