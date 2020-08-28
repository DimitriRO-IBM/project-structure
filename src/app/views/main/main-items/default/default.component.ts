import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../../shared/models/interfaces/api/customer.model';
import { CustomersService } from '../../../../shared/services/api/customers.service';
import { DefaultService } from '../../../../shared/services/api/default.service';
import { HelpService } from '../../../../shared/services/help.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  selectedName: string = '';
  selectedCustomer: Customer | undefined;

  fileToSend: File | null | undefined = null;
  customers: Customer[] = [];
  sortedCustomers: Customer[] = [];

  sortOrder: number = 0;

  tableKeys: string[] = [];

  constructor(
    private customersService: CustomersService,
    private defaultService: DefaultService,
    private helpService: HelpService,
  ) {
    this.tableKeys = [
      'sacrname',
      'srmname1',
      'srmname2',
      'srmname3',
      'srmname4',
      'srmname5',
      'subclient',
      'restricted',
      'portal',
      'srmeu',
      'brod',
      'stor',
      'active',
    ];
  }

  ngOnInit(): void {
    this.customersService.selectedUser.asObservable().subscribe({
      next: (customer: Customer) => {
        if (customer) {
          this.selectedCustomer = customer;
        }
      },
    });

    this.customersService.getAll().subscribe({
      next: (customers: Customer[]) => {
        this.customers = customers;
        this.sortedCustomers = [...this.customers];
      },
    });

    this.helpService.setHelp(`Bonjour,\n\nVous êtes bien sur la page "Default" de l'application.\nVoici votre aide contextuelle.\n\n${Date.now()}`);
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

  sortTableBy(key: string): void {
    let multiplier: number;
    const order: number = this.changeSortOrder();

    switch (order) {
      case 0:
        // On récupère la valeur du tableau de départ
        this.sortedCustomers = [...this.customers];
        break;
      case 1:
        // ASC
        multiplier = 1;
        break;
      case 2:
        // DESC
        multiplier = -1;
        break;
    }

    if (order !== 0) {
      this.sortedCustomers.sort((a: Customer, b: Customer): number => {
        // @ts-ignore
        if (a[key] > b[key]) {
          return multiplier;
        }
        // @ts-ignore
        if (a[key] < b[key]) {
          return -multiplier;
        }
        return 0;
      });
    }
  }

  changeSortOrder(): number {
    // DESC => NULL
    if (this.sortOrder === 2) {
      this.sortOrder = 0;
    } else {
      // 0: NULL, 1: ASC, 2: DESC
      this.sortOrder += 1;
    }

    return this.sortOrder;
  }
}
