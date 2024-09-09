import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NewComponentComponent} from '../new-component/new-component.component' 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
firstName = 'Me😁';
}
