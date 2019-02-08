import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData = [];
  errorMessage: string;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-z0-9]+')])
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }
  validateData() {
    //console.log(this.loginForm.controls['username'].value);
    this.formData = JSON.parse(localStorage.getItem('formsData'));
    for (let data of this.formData) {
      if ((data.username == this.loginForm.controls['username'].value || data.email == this.loginForm.controls['username'].value || data.number == this.loginForm.controls['username'].value) && data.password == this.loginForm.controls['password'].value) {
        this.router.navigate(['/details'], { queryParams: data });
      }
      else {
        this.errorMessage = "You Entered A Worng Details/ Register First ";
      }
    }


  }

}
