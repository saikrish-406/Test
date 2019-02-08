import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formData = [];
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-z]+')]),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8), Validators.pattern('[a-zA-z0-9]+')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-z0-9]+')]),
    confirmPassword: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9]+\@[a-z]+\.com')]),
    number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]+')]),
    address: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)])

  });

  constructor(private router: Router) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('formsData')) != null) {
      this.formData = JSON.parse(localStorage.getItem('formsData'));
    }
  }
  saveData() {
    //console.log(this.signupForm.value);
    this.formData.push(this.signupForm.value);
    localStorage.setItem('formsData', JSON.stringify(this.formData));
    this.signupForm.reset();
    this.router.navigate(['/logIn']);
  }

}
