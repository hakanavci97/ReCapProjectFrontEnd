import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarImageDetailComponent } from './components/car-image-detail/car-image-detail.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';

const routes: Routes = [

{path:"",pathMatch:"full",component:CardetailComponent},
{path:"cars",component:CardetailComponent},
{path:"cars/brand/:brandId",component:CardetailComponent},
{path:"cars/color/:colorId",component:CardetailComponent},
{path:"cars/carImageDetail/:carId",component:CarImageDetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
