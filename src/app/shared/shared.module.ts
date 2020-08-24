import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
  ],
  exports: [
    AsideComponent
  ]
})
export class SharedModule { }
