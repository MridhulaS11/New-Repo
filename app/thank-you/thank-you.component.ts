import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent {
  rating: number;

  constructor(private router: Router) {
    this.rating = this.router.getCurrentNavigation()?.extras.state?.['rating'];
  }
}