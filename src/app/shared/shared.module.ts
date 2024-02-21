import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [ButtonComponent, TableComponent],
  imports: [CommonModule, ButtonModule, TableModule],
  exports: [ButtonComponent, TableComponent],
})
export class SharedModule {}
