import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { ConfigService } from './config.service';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';

// Import containers
import { DashboardModule } from './dashboard/dashboard.module';

// Import routing module
import { AppRoutesModule,routingComponents } from './app.routing';

// Import 3rd party components
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule,
    DashboardModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    routingComponents,
  ],
  providers: [ ConfigService,ApiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
