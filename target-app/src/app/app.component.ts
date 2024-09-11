import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule],
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
  luckyNumber=0;
  approve(status: boolean){
    this.isApproved=status;

  }
}
