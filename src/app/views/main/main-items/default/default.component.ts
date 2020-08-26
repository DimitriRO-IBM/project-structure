import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../../../../shared/models/interfaces/api/customer.model';
import { CustomersService } from '../../../../shared/services/api/customers.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  selectedCustomerId: Observable<string> = of('');
  selectedId: string = '';
  selectedCustomer: Customer | undefined;

  constructor(
    private customersService: CustomersService,
  ) { }

  ngOnInit(): void {
    this.selectedCustomerId = this.customersService.selectedUser.asObservable();

    this.selectedCustomerId.subscribe({
      next: (id: string) => {
        if (id) {
          this.selectedId = id;
        }
      },
    });
  }

}
