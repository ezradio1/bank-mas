import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Cashier, CashierService } from './cashier.service';
import { Column } from '../shared/table/table.component';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.scss'],
})
export class CashierComponent implements OnInit, AfterViewInit {
  @ViewChild('statusTemplate') statusTemplate!: TemplateRef<any>;
  @ViewChild('createdDateTemplate') createdDateTemplate!: TemplateRef<any>;
  columns: Column[] = [];
  data: any;
  uploadSidebar = false;

  constructor(private cashierService: CashierService) {}
  ngAfterViewInit(): void {
    this.columns = [
      {
        field: 'id',
        header: 'ID Kasir',
        class: 'text-2E2E2E',
      },
      {
        field: 'name',
        header: 'Nama Kasir',
        class: 'text-A1A1A1',
      },
      {
        field: 'phone',
        header: 'No HP Kasir',
        class: 'text-A1A1A1 min-w-150',
      },
      {
        field: 'email',
        header: 'Email Kasir',
        class: 'text-A1A1A1',
      },
      {
        field: 'idRepo',
        header: 'ID Repo',
        class: 'text-A1A1A1',
      },
      {
        field: 'isActive',
        header: 'Status',
        render: this.statusTemplate,
      },
      {
        field: 'createdDate',
        header: 'Tanggal Dibuat',
        class: 'text-A1A1A1 w-20rem',
        render: this.createdDateTemplate,
      },
    ];
  }

  ngOnInit(): void {
    this.cashierService.fetchAllData().subscribe((data) => {
      this.data = data;
    });
  }
}
