import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./first/first.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataInjection';
}
