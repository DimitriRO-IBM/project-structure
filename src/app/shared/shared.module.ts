import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AsideComponent } from './components/aside/aside.component';
import { KeysPipe } from './pipes/keys.pipe';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  declarations: [
    AsideComponent,
    KeysPipe,
    HelpComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    AsideComponent,
    KeysPipe,
    HelpComponent
  ]
})
export class SharedModule {
}
