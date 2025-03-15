import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  features = [
    { id: 1, title: 'Grand Plaza Hotel', location: 'Downtown', description: 'Luxury stay.', rating: 4.6, image: 'assets/room-1.jpg' },
    { id: 6, title: 'Oceanfront Resort', location: 'Beachside', description: 'Relax by the ocean.', rating: 4.7, image: 'assets/images/ocean-view.jfif' },
    { id: 3, title: 'Grand Palace Hotel', location: 'New York', description: 'A luxurious hotel with a rooftop pool, spa, and fine dining.', image: 'assets/room-4.jpg', rating: 4.8 },
    { id: 4, title: 'Urban Skyline Suites', location: 'Metropolitan Area', description: 'Chic suites with panoramic views of the city.', image: 'assets/room-3.jpg', rating: 4.6 },
    { id: 5, title: 'Horizon Bay Resort', location: 'San Francisco', description: 'Seaside resort with breathtaking ocean views.', image: 'assets/room-2.jpg', rating: 4.9 },
    { id: 2, 
      title: 'Serenity Valley Resort', 
      location: 'Nature Retreat',
      description:'Tranquil resort nestled in a serene valley for nature enthusiasts.', 
      rating: 5, 
      image: 'assets/images/Hidden-Valley.jpeg'}
  ];

  backgroundImages = [
    'assets/hotel.jpg',
    'assets/about-bg1.jpg',
    'assets/hotel1.jpg',
    'assets/about-bg.jpg'
  ];
  currentIndex = 0;

  constructor(private router: Router) {}

  // Navigates to the hotel list page
  bookNow() {
    this.router.navigate(['/hotels']); 
  }

  // Navigates to the reservation page with the selected hotel ID
  goToHotel(hotelId: number) {
    this.router.navigate(['/hotels']);
  }

  // ✅ Navigates to About Us page
  goToAboutUs() {
    this.router.navigate(['/about']);
  }

  // Returns an array of stars for rating display
  getStars(rating: number): string[] {
    return Array(Math.floor(rating)).fill('⭐');
  }

  // Rotates hero section background images every 4 seconds
  ngAfterViewInit() {
    setInterval(() => {
      const heroSection = document.querySelector('.hero-section') as HTMLElement;
      if (heroSection) {
        this.currentIndex = (this.currentIndex + 1) % this.backgroundImages.length;
        heroSection.style.backgroundImage = `url('${this.backgroundImages[this.currentIndex]}')`;
      }
    }, 3000); // Change image every 4 seconds
  }
}
