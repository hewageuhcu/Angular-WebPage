import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Forms}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class Component implements OnInit {
  @viewChild('myInput', {static:true}) myCustomInput;

ngOnInit(){
  this.myCustomInput.nativeElement.focus();
}

sendInput(input,channel){
console.log(input.value);
console.log(channel.innerText);
}
}
