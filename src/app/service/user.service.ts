import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpclients: HttpClient) {

  }
  getUser(): Observable<IUser>{
    return  this.httpclients.get<IUser>(this.url)
  }
}
