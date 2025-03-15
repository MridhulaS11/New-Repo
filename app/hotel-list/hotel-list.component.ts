import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  selectedLocation: string = '';
  selectedRoomType: string = '';
  selectedAmenity: string = '';
  selectedHotel: string = '';

  constructor(private router: Router) {}

  hotels = [
    { id: 1, name: 'Grand Plaza Hotel', location: 'Downtown City Center', description: 'Luxury hotel with stunning views of the city.', rating: 4.6, roomType: "Deluxe", amenities: ["WiFi", "Pool", "Gym"], images: ['assets/images/gym1.avif', 'assets/images/pool1.webp', 'assets/images/wifi1.jpg'] },
    { id: 2, name: 'Oceanfront Resort & Spa', location: 'Beachfront Paradise', description: 'Relaxing resort with spa facilities, steps away from the ocean.', rating: 4.7, roomType: 'Single', amenities: ['WiFi', 'High-speed internet access', 'Spa'], images: ['assets/images/ocean2.avif', 'assets/images/wifi2.webp', 'assets/images/spa2.jfif'] },
    { id: 3, name: 'Mountain View Hotel', location: 'Mountainous Region', description: 'Elegant hotel surrounded by breathtaking mountain views.', rating: 4.2, roomType: 'Suite', amenities: ['Gym', 'Fully equipped fitness center'], images: ['assets/images/gym3.jfif', 'assets/images/mountain3.jfif', 'assets/images/mountain-3.jfif'] },
    { id: 4, name: 'Seaside Retreat Lodge', location: 'Coastal Area', description: 'Scenic lodge offering a peaceful escape by the sea.', rating: 4.3, roomType: 'Penthouse', amenities: ['Pool', 'Swimming pool with lounge area'], images: ['assets/images/lounge4.jfif', 'assets/images/pool4.jfif', 'assets/images/penthouse4.jfif'] },
    { id: 5, name: 'Urban Skyline Suites', location: 'Metropolitan Area', description: 'Chic suites with panoramic views of the city skyline.', rating: 4.5, roomType: 'Suite', amenities: ['Family Suite', 'Spacious suite for the whole family', 'WiFi'], images: ['assets/images/suite5.jfif', 'assets/images/suite5b.jfif', 'assets/images/wifi5.jfif'] },
    { id: 6, name: 'Serenity Valley Resort', location: 'Nature Retreat', description: 'Tranquil resort nestled in a serene valley for nature enthusiasts.', rating: 4.3, roomType: 'Ocean View Double', amenities: ['Spa', 'Relaxing spa and wellness services'], images: ['assets/images/wellness6.jfif', 'assets/images/welness6.jfif', 'assets/images/spa6.jpg'] },

    { id: 7, 
      name: 'Riverside Boutique Hotel', 
      location: 'Riverside District',
      description:'Boutique hotel offering a blend of comfort and style by the river.', 
      rating: 4.6, imageUrl: 'assets/images/river-side.jfif', 
      roomType: "Deluxe",  
      amenities: ['Parking', 'Secure parking facilities','WiFi'],
      images: [
      'assets/images/parking7.jpg',
      'assets/images/room7.jfif',
      'assets/images/wifi7.jfif'
    ] },
    { id: 8, 
      name: 'Historic Heritage Inn', 
      location: 'Historical District',
      description:'Charming inn showcasing rich cultural heritage.', 
      rating: 4.4, 
      imageUrl: 'assets/images/heritage.jfif', 
      roomType: 'Executive Suite',  
      amenities: ['Restaurant', 'On-site restaurant serving a variety of cuisines','Wellness center'] ,
      images: [
      'assets/images/histhotel8.jfif',
      'assets/images/historic8.jfif',
      'assets/images/hertage8.jfif'
    ]},
    { id: 9, 
      name: 'Downtown Oasis Hotel', 
      location: 'City Center',
      description:'Modern hotel with a central location, perfect for business travelers.', 
      rating: 4.3, 
      imageUrl: 'assets/images/oasis.jfif', 
      roomType: 'Royal Penthouse',  
      amenities: ['Conference Room', 'Meeting and conference room facilities'],
      images: [
      'assets/images/penthouse9.jfif',
      'assets/images/conference9.jfif',
      'assets/images/pent9.jfif'
    ] },
    { id: 10, 
      name: 'Alpine Retreat Lodge', 
      location: 'Alpine Meadows',
      description:'Inviting lodge surrounded by alpine meadows and hiking trails.', 
      rating: 4.6, 
      imageUrl: 'assets/images/alphine.jpg', 
      roomType: 'Mountain Retreat Double',  
      amenities: ['Shuttle Service', 'Complimentary shuttle service for guests','Pool'],
      images: [
      'assets/images/romm11.jpeg',
      'assets/images/Shuttle11.jpg',
      'assets/images/pool11.jfif'
    ] },
    { id: 11, 
      name: 'Business Traveler Inn', 
      location: 'Business District',
      description:'Tailored for the needs of business travelers.', 
      rating: 4.7, imageUrl: 'assets/images/Business.jfif', 
      roomType: 'Business Traveler Room',  
      amenities:['Conference Room', 'Meeting and conference room facilities'],images: [
      'assets/images/Boston10.jpg',
      'assets/images/business10.jfif',
      'assets/images/wifi10.png'
    ] },
    { id: 12, 
      name: 'Harbor View Hotel', 
      location: 'Harborfront District',
      description:'Enjoy scenic harbor views in this waterfront hotel.', 
      rating: 4.2, 
      imageUrl: 'assets/images/harbour.jfif', 
      roomType: 'Presidential Suite',  
      amenities: ['24-Hour Reception', 'Round-the-clock reception desk services'] ,
      images: [
      'assets/images/presendial12.jfif',
      'assets/images/reception12.jfif',
      'assets/images/hotel12.jfif'
    ]}
  ];

  uniqueLocations: string[] = [...new Set(this.hotels.map(h => h.location))];
  uniqueRoomTypes: string[] = [...new Set(this.hotels.map(h => h.roomType))];
  uniqueAmenities: string[] = [...new Set(this.hotels.flatMap(h => h.amenities))];
  uniqueHotelNames: string[] = [...new Set(this.hotels.map(h => h.name))];

  filteredHotels() {
    return this.hotels.filter(hotel =>
      (this.selectedLocation ? hotel.location === this.selectedLocation : true) &&
      (this.selectedRoomType ? hotel.roomType === this.selectedRoomType : true) &&
      (this.selectedAmenity ? hotel.amenities.includes(this.selectedAmenity) : true) &&
      (this.selectedHotel ? hotel.name === this.selectedHotel : true)
    );
  }

  goToReservation(hotelId: number) {
    this.router.navigate(['/reservation', hotelId]); // ✅ Navigate to Reservation Page with Hotel ID
  }
}
