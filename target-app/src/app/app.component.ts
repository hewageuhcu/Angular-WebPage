import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isApproved=false;
  number=[
    'one',
    'two',
    'three',
    'four',
    'five'
  ];
  approve(status: boolean){
    this.isApproved=status;

  }
}
