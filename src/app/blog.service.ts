import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apikey: any="43307866b602c090731feef9b1";

  constructor(private http:HttpClient) { }
  GetAllBlogs(){
    return this.http.get<any>(`https://www.d-drops.com/ghost/api/v2/content/posts/?key=${this.apikey}&include=tags,authors`).pipe(map(a=>a.posts));
  }
}
