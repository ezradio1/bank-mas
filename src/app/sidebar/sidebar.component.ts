import { Component, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  sidebarVisible: boolean = false;
  menus = [
    {
      key: 'manajemen-ajudan',
      label: 'Manajemen Ajudan',
      children: [
        {
          label: 'Depo',
          path: '/depo',
        },
        {
          label: 'Agen',
          path: '/agen',
        },
        {
          label: 'Kasir',
          path: '/cashier',
        },
        {
          label: 'Toko',
          path: '/depo',
        },
      ],
    },
  ];

  activeMenu = this.menus[0].key;

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }
  constructor() {}

  ngOnInit(): void {}

  handleSelectMenu(key: string) {
    this.activeMenu = this.activeMenu === key ? '' : key;
  }
}
