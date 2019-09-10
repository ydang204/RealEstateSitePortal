import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [
    // {
    //   path: '',
    //   redirectTo: 'dashboard1',
    //   pathMatch: 'full'
    // },
    // {
    //   path: 'dashboard1',
    // }
  ]
}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
