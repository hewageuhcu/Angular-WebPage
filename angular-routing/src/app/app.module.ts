import { AppRoutingModule } from "./app.routes";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[BrowserModule,
        AppRoutingModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{}