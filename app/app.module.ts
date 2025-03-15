import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component'; 
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
//import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationComponent,
    HotelListComponent,
    AboutUsComponent,
    LoginComponent,
    PaymentComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
