import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-sidebar',
  templateUrl: './upload-sidebar.component.html',
  styleUrls: ['./upload-sidebar.component.scss'],
})
export class UploadSidebarComponent implements OnInit {
  @Input() visible!: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onCancel = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  cancel() {
    this.onCancel.emit();
  }

  onHide() {}

  downloadFile() {
    const link = document.createElement('a');
    link.href = '/assets/files/data.csv';
    link.download = 'contoh_template.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
