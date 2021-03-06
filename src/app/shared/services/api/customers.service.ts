import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../../models/interfaces/api/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {

  readonly API_URL: string = 'http://localhost:3000';

  selectedUser: Subject<Customer> = new Subject();

  constructor(
    private http: HttpClient,
  ) {}

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.API_URL}/customers`);
  }

  getOneByName(name: string): Observable<Customer> {
    return this.http.post<Customer>(`${this.API_URL}/customers`, {
      where: {
        sacrname: name,
      }
    });
  }

  setSelectedCustomer(customer: Customer): void {
    this.selectedUser.next(customer);
  }
}
