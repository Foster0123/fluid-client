import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import{ faHamburger } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatIconModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
}
