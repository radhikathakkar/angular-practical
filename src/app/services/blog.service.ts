import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../shared/baseUrl';
import { IBlog } from '../shared/blog.interface';
import { Response } from '../shared/response';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = `${BASE_URL}/blog/`;
  
  constructor(
    private http: HttpClient
  ) { }

  addBlog(blog: IBlog){
    return this.http.post<Response>(this.url, blog);
  }

  fetchBlogs(){
    return this.http.get<Response>(this.url);
  }
}
