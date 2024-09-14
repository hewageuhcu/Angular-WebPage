import { Routes ,RouterModule} from '@angular/router';
import { NgModule, NgModuleRef } from '@angular/core';

export const routes: Routes = [];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
