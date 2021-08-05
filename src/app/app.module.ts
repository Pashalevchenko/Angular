import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from "./components/users/users.component";
import {RouterModule} from "@angular/router";
import {UserResolveService} from "./service/user-resolve.service";
import { UserComponent } from './components/user/user.component';
import { UsersReactComponent } from './reactive-form/users-react/users-react.component';
import { UserReactComponent } from './reactive-form/user-react/user-react.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UsersReactComponent,
    UserReactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'users', component: UsersComponent, resolve: {data: UserResolveService}, children:[
          {path: ':id', component: UserComponent},
          {path: 'reactComp/:id', component: UserReactComponent}
        ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
