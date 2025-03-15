import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  hotelId: number = 0;
  reservations: any[] = [];

  newReservation = {
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    checkInDate: '',
    checkOutDate: '',
    roomId: 0
  };

  constructor(private route: ActivatedRoute, private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hotelId = params['hotelId']; // ✅ Get Hotel ID from URL
    });
    this.getReservations();
  }

  getReservations() {
    this.reservationService.getReservations().subscribe(data => {
      this.reservations = data;
    });
  }
  addReservation(form: NgForm) {
    if (form.valid) {
        this.newReservation.roomId = this.hotelId; // ✅ Attach selected hotel ID

        // ✅ Create flying object
        const flyingObject = document.createElement('div');
        flyingObject.classList.add('flying-object');
        document.body.appendChild(flyingObject);

        // ✅ Remove the flying object after animation
        setTimeout(() => {
            flyingObject.remove();
        }, 3000);

        // ✅ Submit reservation
        this.reservationService.createReservation(this.newReservation).subscribe(() => {
            this.getReservations();
            form.resetForm(); // ✅ Reset form after submission
        });
    }
}

  
  createFlyingObject() {
    const flyingObject = document.createElement('div');
    flyingObject.classList.add('flying-object'); // ✅ Apply CSS class
    document.body.appendChild(flyingObject);
  
    // ✅ Remove object after animation ends
    setTimeout(() => {
      flyingObject.remove();
    }, 3000);
  }
  
  deleteReservation(reservationId: number) {
    this.reservationService.deleteReservation(reservationId).subscribe(() => {
      this.getReservations();
    });
  }
}
