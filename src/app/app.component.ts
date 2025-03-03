import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ChatItemComponent } from "./components/chat-item/chat-item.component";
@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatIconModule,
    NavbarComponent,
    RouterOutlet,
    ChatItemComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fluid';
}
