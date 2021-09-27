import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Response } from '../shared/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  role: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe((res: any) => {
      if(res){
        this.router.navigate(['blog'])
      }
    });
  }

  onSelectRole(event: any){
    
  }

  signUp() {
    this.router.navigate(['signup']);
  }
}
