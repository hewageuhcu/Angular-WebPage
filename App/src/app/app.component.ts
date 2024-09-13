import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./parent/parent.component";
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}

@NgModule({
  declarations:[
    Component,
    ParentComponent,
    ChildComponent
  ],
  imports:[
    BrowserModule,
    FormsModule
  ],
  providers:[],
  bootstrap:[Component]
})
export class AppModule{}
