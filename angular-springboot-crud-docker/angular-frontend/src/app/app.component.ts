import { Component } from '@angular/core';

/**
 * @title AppComponent
 * @description This is the root component of the application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * @description The title of the application.
   */
  title = 'Angular + Spring Boot CRUD Full Stack App';
}
