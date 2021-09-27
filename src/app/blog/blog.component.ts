import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BlogService } from '../services/blog.service';
import { IBlog } from '../shared/blog.interface';
import { Response } from '../shared/response';
import { IUser } from '../shared/user.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: IBlog[] =[]; 
  currentUser: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    dob: new Date(),
    token: ''
  };
  constructor(
    private blogService: BlogService,
    private authService: AuthService
  ) { 
    this.currentUser =  this.authService.currentUserValue;
  }

  ngOnInit(): void {
    this.getBlogs();
  }

  get role(){
    return this.authService.getRole;
  }

  getBlogs(){
    this.blogService.fetchBlogs().subscribe((res: Response) => {
      this.blogs = res.data;
    })
  }

  logout(){
    this.authService.logout();
  }

}
