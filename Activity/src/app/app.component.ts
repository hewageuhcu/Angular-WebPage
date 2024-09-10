import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activity';
  numbers = [
    'one',
    'two',
    'three',
    'four'
  ];
  luckyNumber: 0;
}
