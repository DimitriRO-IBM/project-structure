import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatSelectChange } from '@angular/material/select';
import { Customer } from '../../shared/models/interfaces/api/customer.model';
import { CustomersService } from '../../shared/services/api/customers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  customers: Customer[] = [];

  constructor(
    private customersService: CustomersService,
  ) { }

  ngOnInit(): void {
    this.customersService.getAll().subscribe({
      next: (customers: Customer[]) => {
        if (customers && customers.length) {
          this.customers = customers;
        }
      },
    });
  }

  onSelectCustomer(event: MatSelectChange): void {
    this.customersService.setSelectedCustomer(event.source.value);
  }
}
