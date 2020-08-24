import { NgModule } from '@angular/core';
import { ViewsModule } from '../../views/views.module';
import { LayoutModule } from '../layout.module';
import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { DefaultLayoutComponent } from './default-layout.component';

@NgModule({
  imports: [
    DefaultLayoutRoutingModule,
    ViewsModule,
    LayoutModule,
  ],
  declarations: [
    DefaultLayoutComponent,
  ],
  exports: [
    DefaultLayoutComponent,
  ]
})
export class DefaultLayoutModule { }
