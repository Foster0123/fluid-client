import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chat-item',
  imports: [MatButtonModule, MatCardModule, MatIconModule, FontAwesomeModule],
  templateUrl: './chat-item.component.html',
  styleUrl: './chat-item.component.scss'
})
export class ChatItemComponent {
  faCircle = faCircle
}
