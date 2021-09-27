import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Response } from '../shared/response';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    role: new FormControl(),
    dob: new FormControl(),
  });
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      role: new FormControl('user'),
      dob: new FormControl(''),
    });
  }

  get signupData(){
    return this.signupForm.controls;
  }
  onSubmit() {
      this.authService.signup(this.signupForm.value)
      .subscribe((res: Response) => {
        if(res.success){
          alert(res.message);
        }
      })
  }
}
