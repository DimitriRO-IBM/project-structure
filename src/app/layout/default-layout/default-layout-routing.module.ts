import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../views/login/login.component';
import { MainComponent } from '../../views/main/main.component';
import { DefaultLayoutComponent } from './default-layout.component';

const routes: Routes = [{
    path: '',
    component: DefaultLayoutComponent,
    children: [{
      path: '',
      component: LoginComponent
    }, {
      path: 'main',
      component: MainComponent,
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultLayoutRoutingModule { }
