import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Dashboard1Component } from './../admin/layout/dashboard1/dashboard1.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard1',
      pathMatch: 'full'
    },
    {
      path: 'dashboard1',
      component: Dashboard1Component
    }
  ]
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
