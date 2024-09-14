import { Component,OnInit } from '@angular/core';
import {ShapesService} from '../shapes.serice';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent impelements OnInit {

  shape='';
  color='';
  shapeClass='';

  constructor(private shapesService:ShapesService){}

  ngOnInit():void{

  }
  drawShape(){
    this.shapeClass=this.shapesService.getClassName(this.shape, this.color);
  }
}
