import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNGConfig } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { AgenComponent } from './agen/agen.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuRightComponent } from './menu-right/menu-right.component';
import { RightControlComponent } from './right-control/right-control.component';
import { TableComponent } from './shared/table/table.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, AgenComponent, MenuRightComponent, RightControlComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
