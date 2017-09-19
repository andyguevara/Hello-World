import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { VodRecordDetailComponent } from './app.record-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    VodRecordDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
