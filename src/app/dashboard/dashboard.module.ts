import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRouteModule, dashboardRoutingComponents } from './dashboard-route.module';

import { DefaultLayoutComponent } from '../dashboard/containers';
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  imports: [
    CommonModule,
    DashboardRouteModule,
    FormsModule,
    AppAsideModule,
	AppBreadcrumbModule.forRoot(),
	AppHeaderModule,
	AppFooterModule,
	AppSidebarModule,
	PerfectScrollbarModule,
	TabsModule.forRoot(),
  ],
  declarations: [
  dashboardRoutingComponents,
  ...APP_CONTAINERS,
  ]
})
export class DashboardModule { }
