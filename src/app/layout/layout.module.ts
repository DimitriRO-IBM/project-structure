import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsModule } from '../views/views.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ViewsModule,
  ]
})
export class LayoutModule { }
