import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlogComponent,
    AddBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
