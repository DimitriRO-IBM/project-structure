import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounce, debounceTime, mergeMap } from 'rxjs/operators';
import { Customer } from '../../../../shared/models/interfaces/api/customer.model';
import { CustomersService } from '../../../../shared/services/api/customers.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  selectedName: string = '';
  selectedCustomer: Customer | undefined;

  constructor(
    private customersService: CustomersService,
  ) { }

  ngOnInit(): void {
    this.customersService.selectedUser.asObservable().subscribe({
      next: (customer: Customer) => {
        if (customer) {
          this.selectedCustomer = customer;
        }
      },
    });
  }

}
