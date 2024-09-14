import { Component,OnInit } from '@angular/core';
import { ShapesService } from '../shapes.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
shape='';
color='';
shapeClass='';

constructor(private shapeService:ShapeService){}

ngOnInit():void{

}
drawShape(){
  this.shapeClass-this.shapeService.getClassName(this.shape, this.color);
}
}
