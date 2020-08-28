import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/api/login.service';

import { parse, ParseResult } from 'papaparse';

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

  csvHeaders: string[] = [];
  // tslint:disable-next-line:no-any
  csvData: any[] = [];

  isLoading: boolean = true;
  loaded: boolean = false;

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
    private loginService: LoginService,
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

  loadCsvFile(): void {
    this.isLoading = true;
    this.loginService.getCsvAsFile().subscribe({
      next: (data: Blob): void => {
        if (data) {
          const file: File = new File([data], data.type);
          parse((file), {
            header: true,
            error: (error) => {
              console.error(error);
            },
            complete: (results: ParseResult<unknown>) => {
              console.log('Parsing complete ! Here is your result: ', results);
              this.csvHeaders = results.meta.fields;
              // tslint:disable-next-line:no-any
              this.csvData = [...(results.data as any)];
            },
          });
        }
      },
      error: (error: Error): void => {
        throw error;
      },
      complete: (): void => {
        this.isLoading = false;
        this.loaded = true;
      }
    });
  }
}
