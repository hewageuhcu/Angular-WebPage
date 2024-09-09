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
changeValue($event: Event) {
throw new Error('Method not implemented.');
}
firstName = 'Me😁';
imagePath="A.jpg";
defaultVal="Chathurya"

passValueToComponent(e: Event) {
  const inputElement = e.target as HTMLInputElement;
  console.log(inputElement.value);
}

}
