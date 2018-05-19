import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpcallService } from './httpcall.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [HttpcallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
