import { Component, OnInit } from '@angular/core';
import { HelpService } from '../../../../shared/services/help.service';

@Component({
  selector: 'app-global-inventory',
  templateUrl: './global-inventory.component.html',
  styleUrls: ['./global-inventory.component.scss']
})
export class GlobalInventoryComponent implements OnInit {

  constructor(
    private helpService: HelpService,
  ) { }

  ngOnInit(): void {
    this.helpService.setHelp(`Bonjour,\n\nVous êtes bien sur la page "Global Inventory" de l'application.\nVoici votre aide contextuelle.\n\n${Date.now()}`);
  }

}
