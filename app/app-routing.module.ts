import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AboutUsComponent } from './about-us/about-us.component'; // ✅ Imported AboutUsComponent
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home Page as Default
  {path: 'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: 'home', component: HomeComponent },
  { path: 'hotels', component: HotelListComponent }, // ✅ Route for Hotel List
  { path: 'reservation/:hotelId', component: ReservationComponent }, // ✅ Route for Reservation with hotelId
  { path: 'payments', component: PaymentComponent },
  { path: '', redirectTo: '/payments', pathMatch: 'full' },
  { path: 'about', component: AboutUsComponent }, // ✅ Added About Us Route
  { path: '**', redirectTo: '' }, // Redirect unknown routes to HomeComponent
  { path: '', component: FeedbackComponent },
  { path: 'thank-you', component: ThankYouComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
