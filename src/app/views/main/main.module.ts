import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GlobalInventoryComponent } from './main-items/global-inventory/global-inventory.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DefaultComponent } from './main-items/default/default.component';

@NgModule({
  declarations: [
    MainComponent,
    DefaultComponent,
    GlobalInventoryComponent,
  ],
  exports: [
    MainComponent,
  ],
  imports: [
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
