import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { RentaldtoComponent } from './components/rentaldto/rentaldto.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarImageDetailComponent } from './components/car-image-detail/car-image-detail.component';
import { FilterpipePipe } from './pipes/filterpipe.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CustomerComponent,
    ColorComponent,
    BrandComponent,
    NaviComponent,
    RentaldtoComponent,
    CardetailComponent,
    CarImageDetailComponent,
    FilterpipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
