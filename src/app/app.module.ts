import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSubmitModule } from './form-submit/form-submit.module';
import { TableModule } from './table/table.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { LoaderInterceptor } from './_service/loader.interceptor';
import {StyleUtils,StylesheetMap,MediaMarshaller,ɵMatchMedia,BreakPointRegistry,PrintHook,LayoutStyleBuilder,FlexStyleBuilder,ShowHideStyleBuilder,FlexOrderStyleBuilder} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormSubmitModule, 
    TableModule,
    BrowserAnimationsModule,HttpClientModule,MaterialModule
  ],
  providers: [
    StyleUtils,StylesheetMap,MediaMarshaller,ɵMatchMedia,BreakPointRegistry,PrintHook,LayoutStyleBuilder,FlexStyleBuilder,ShowHideStyleBuilder,FlexOrderStyleBuilder,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
