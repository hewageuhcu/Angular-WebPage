import { Routes ,RouterModule} from '@angular/router';
import { NgModule, NgModuleRef } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { AllProductsComponent } from './all-products/all-products.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'product',component:ProductComponent},
    {path:'allproducts/apple',component:AllProductsComponent},
    {path:'allproducts/orange',component:AllProductsComponent},
    {path:'allproducts/mango',component:AllProductsComponent},
    {path:'**',redirectTo:'home'}
 
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
