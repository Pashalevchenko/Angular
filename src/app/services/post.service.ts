import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient : HttpClient) { }

  getPost(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.url);
  }
}
