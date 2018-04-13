import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { PhonePipe } from './pipes/phone.pipe';
import { SomeNameService } from './services/some-name.service';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [SomeNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
