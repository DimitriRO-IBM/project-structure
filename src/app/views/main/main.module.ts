import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
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
        CommonModule,
        MatButtonModule,
    ]
})
export class MainModule { }
