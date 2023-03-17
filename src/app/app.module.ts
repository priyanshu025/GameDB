import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GaugeModule } from 'angular-gauge';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpErrorsInterceptor } from './Interceptors/http-errors.interceptor';
import { HttpHeadersInterceptor } from './Interceptors/http-headers.interceptor';
import { DetailsComponent } from './Components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    GaugeModule.forRoot(),
    HttpClientModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpErrorsInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpHeadersInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
