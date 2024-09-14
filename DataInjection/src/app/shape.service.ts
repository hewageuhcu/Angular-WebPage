import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  constructor() { }
  get ClassName(shape,color){
    return shape + '-' + color;
  }
}
