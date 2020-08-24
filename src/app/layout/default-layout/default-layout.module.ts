import { NgModule } from '@angular/core';
import { ViewsModule } from '../../views/views.module';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { DefaultLayoutComponent } from './default-layout.component';

@NgModule({
  imports: [
    DefaultLayoutRoutingModule,
    ViewsModule,
  ],
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    DefaultLayoutComponent,
  ]
})
export class DefaultLayoutModule { }
