import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  environmentOptions: { id: number, value: string }[] = [{
    id: 0,
    value: 'All OS Reports',
  }, {
    id: 1,
    value: 'zOS Reports',
  }];

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.compose([
      Validators.required,
      Validators.email,
    ])],
    password: ['', Validators.compose([
      Validators.required,
      Validators.compose([
        Validators.min(8),
        Validators.max(16),
      ]),
    ])],
    environment: [this.environmentOptions[0].id]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    alert('Cancel has been hit, work in progress');
  }

  contactUs(): void {
    alert('Contact us has been hit, work in progress');
  }

  logIn(): void {
    if (this.loginForm.valid) {
      // Redirection to another page
      this.router.navigate([
        '/main',
      ]);
    } else {
      alert('Login infos not valid, please try again.');
    }
  }

}
