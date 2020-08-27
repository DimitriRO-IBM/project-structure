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

  selectedName: string = '';
  selectedCustomer: Customer | undefined;

  fileToSend: File | null | undefined = null;

  constructor(
    private customersService: CustomersService,
    private defaultService: DefaultService,
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

  onFileUpload(event: Event): void {
    this.fileToSend = (event?.target as HTMLInputElement)?.files?.item(0);
  }

  sendFile(): void {
    this.defaultService.sendFile(this.fileToSend)
      .subscribe({
        next: (value: unknown) => {
          console.log(value);
        },
      });
  }
}
