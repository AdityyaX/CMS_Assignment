import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms-project';
}
