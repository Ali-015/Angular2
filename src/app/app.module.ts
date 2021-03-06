import { ErrorHandler } from '@angular/core/';
import { CustomErrorHandlerService } from './custom-error-handler.service';
import { IndustryDetailModule } from './industry-detail/industry-detail.module';
import { ResourcesModule } from './resources/resources.module';
import { AboutModule } from './about/about.module';
import { ProductsModule } from './products/products.module';
import { SolutionsModule } from './solutions/solutions.module';
import { IndustriesModule } from './industries/industries.module';
import { ContactModule } from './contact/contact.module';
import { CustomHttpInterceptor } from './http-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatSidenavModule, 
  MatToolbarModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ContactModule,
    IndustriesModule,
    SolutionsModule,
    ProductsModule,
    AboutModule,
    ResourcesModule,
    IndustryDetailModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }, {
    provide: ErrorHandler,
    useClass: CustomErrorHandlerService
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
