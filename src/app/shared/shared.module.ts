import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { AsideComponent } from './components/aside/aside.component';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AsideComponent,
    KeysPipe,
  ],
  imports: [
    CommonModule,
    MatListModule,
  ],
  exports: [
    AsideComponent,
    KeysPipe
  ]
})
export class SharedModule {
}
