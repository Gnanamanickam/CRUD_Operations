import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpServiceService} from 'src/service/http-service.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpServiceService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
