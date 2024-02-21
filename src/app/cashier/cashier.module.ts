import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashierComponent } from './cashier.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SidebarModule } from 'primeng/sidebar';
import { UploadSidebarComponent } from './upload-sidebar/upload-sidebar.component';

@NgModule({
  declarations: [CashierComponent, UploadSidebarComponent],
  imports: [
    CommonModule,
    SharedModule,
    SidebarModule,
    RouterModule.forChild([{ path: '', component: CashierComponent }]),
  ],
})
export class CashierModule {}
