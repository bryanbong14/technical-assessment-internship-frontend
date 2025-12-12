import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected readonly title = signal('task5-angular');

  // Define card data
  cards = [
    { title: 'Card One', text: 'Short description for card one.', img: 'https://picsum.photos/id/1011/300/180' },
    { title: 'Card Two', text: 'Short description for card two.', img: 'https://picsum.photos/id/1012/300/180' },
    { title: 'Card Three', text: 'Short description for card three.', img: 'https://picsum.photos/id/1013/300/180' }
  ];
}
