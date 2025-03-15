import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../feedback.model';
import { FeedbackService } from '../feedback.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback = {
    name: '',
    overallRating: 0,
    categories: [],
    suggestions: '',
    rating: 0,
    comment: ''
  };

  constructor(private feedbackService: FeedbackService, private router: Router) {}

  ngOnInit(): void {
    // Removed water simulation initialization
  }

  // Set the star rating for overall service
  setRating(type: string, rating: number): void {
    if (type === 'overall') {
      this.feedback.overallRating = rating;
    }
  }

  // Toggle feedback categories
  toggleCategory(category: string): void {
    const index = this.feedback.categories.indexOf(category);
    if (index === -1) {
      this.feedback.categories.push(category);
    } else {
      this.feedback.categories.splice(index, 1);
    }
  }

  // Handle form submission
  onSubmit(): void {
    this.feedbackService.submitFeedback(this.feedback).subscribe(
      (response: any) => {
        this.router.navigate(['/thank-you'], { state: { rating: this.feedback.overallRating } });
      },
      (error: any) => {
        console.error('Error submitting feedback:', error);
      }
    );
  }
}