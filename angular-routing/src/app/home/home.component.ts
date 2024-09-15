import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}

  ngOnInit():void{

  }
  goToProduct(){
    console.log("Trying to update database...");
    setTimeout(() =>{
      console.log("Database is updated");
      this.router.navigate(['product']);
    },
   2000 );
  }
}
