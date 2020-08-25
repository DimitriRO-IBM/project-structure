import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../../shared/models/interfaces/api/customer.model';
import { CustomersService } from '../../../../shared/services/api/customers.service';
import { DefaultService } from '../../../../shared/services/api/default.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  apiMessage: string = '';
  customers: Customer[] = [];

  constructor(
    private defaultService: DefaultService,
    private customersService: CustomersService,
  ) { }

  ngOnInit(): void {
    this.defaultService.getApiMessage().subscribe({
      next: (message: { message: string }) => {
        if (message) {
          this.apiMessage = message.message;
        }
      }
    });

    this.customersService.getAll().subscribe({
      next: (customers: Customer[]) => {
        if (customers && customers.length) {
          this.customers = customers;
        }
      }
    });
  }

}
