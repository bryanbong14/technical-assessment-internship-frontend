import { Component, signal } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ContactComponent] // import contact component
})
export class App {
  protected readonly title = signal('task5-angular');
}
