import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../models/IUser";
import {UserService} from "./user.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<any>{


  constructor(private userService: UserService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    return this.userService.getUser();
  }
}
