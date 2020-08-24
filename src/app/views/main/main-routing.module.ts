import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './main-items/default/default.component';
import { GlobalInventoryComponent } from './main-items/global-inventory/global-inventory.component';
import { MainComponent } from './main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [{
    path: '',
    component: DefaultComponent,
  }, {
    path: 'global-inventory',
    component: GlobalInventoryComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
