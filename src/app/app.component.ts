import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { NavbarComponent } from "./components/navbar/navbar.component";
@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatIconModule,
    NavbarComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fluid';
}
