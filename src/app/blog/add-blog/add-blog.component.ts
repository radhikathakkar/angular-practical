import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { BlogService } from 'src/app/services/blog.service';
import { Response } from 'src/app/shared/response';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  addBlogForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    status: new FormControl(),
  });
  constructor(private fb: FormBuilder, private blogService: BlogService) {}

  ngOnInit(): void {
    this.createSignupForm();
  }

  createSignupForm() {
    this.addBlogForm = this.fb.group({
      title: new FormControl(''),
      description: new FormControl(''),
      status: new FormControl(''),
    });
  }

  get signupData(){
    return this.addBlogForm.controls;
  }
  onSubmit() {
      this.blogService.addBlog(this.addBlogForm.value)
      .subscribe((res: Response) => {
        if(res.success){
          alert(res.message);
          this.addBlogForm.reset();
        }
      })
  }

}
