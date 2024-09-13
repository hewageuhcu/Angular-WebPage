import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit{
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
channelName='Chathurya';

constructor(){}

}
