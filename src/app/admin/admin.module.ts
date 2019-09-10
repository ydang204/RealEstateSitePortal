import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { HeaderComponent } from './layout/header/header.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ControlSidebarComponent } from './layout/control-sidebar/control-sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { LeftSideComponent } from './layout/left-side/left-side.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [
    AdminComponent,
    HeaderComponent,
    LeftSideComponent,
    ContentComponent,
    FooterComponent,
    ControlSidebarComponent,
    DashboardComponent
  ]
})
export class AdminModule {}
