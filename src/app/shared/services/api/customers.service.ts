import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/interfaces/api/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {

  readonly API_URL: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) {}

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.API_URL}/customers`);
  }
}
