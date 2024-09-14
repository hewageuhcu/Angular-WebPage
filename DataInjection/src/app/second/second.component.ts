import { Component,OnInit } from '@angular/core';
import {ShapeService} from '../shape.service';

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

  constructor(private ShapeService:ShapeService){}

  ngOnInit():void{

  }
  drawShape(){
    this.shapeClass=this.shapesService.getClassName(this.shape, this.color);
  }
}
