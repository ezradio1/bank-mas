import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

export interface Column {
  field: string;
  header: string;
  class?: string;
  render?: TemplateRef<any>;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() columns: Column[] = [];

  constructor() {}

  ngOnInit(): void {}
}
