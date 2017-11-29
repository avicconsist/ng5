import { BrowserModule } from '@angular/platform-browser';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GridComponent } from './grid/grid.component'; 
import { ChartComponent } from './chart/chart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridModule } from '@progress/kendo-angular-grid';
import { RTL } from '@progress/kendo-angular-l10n';

import { ChartsModule } from '@progress/kendo-angular-charts';

import { DataService } from './data.service';

import 'hammerjs';
 

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        GridComponent,
        ChartComponent 
      
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        GridModule,
        ChartsModule,
        FormsModule,
        AngularFontAwesomeModule
    ], 
    bootstrap: [AppComponent ],
    providers: [{ provide: RTL, useValue: true }, DataService],
  
})
export class AppModule { }
