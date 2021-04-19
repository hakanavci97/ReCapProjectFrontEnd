import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDto } from '../models/cardto';

@Injectable({
  providedIn: 'root',
})
export class CarDtoService {
  apiUrl = 'https://localhost:44313/api/';

  constructor(private httpClient: HttpClient) { }

  getCarsDto(): Observable<ListResponseModel<CarDto>> {
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl+"cars/GetCarsByBrandId?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);

  }

  getCarsByColor(colorId:number){
    let newPath=this.apiUrl+"cars/GetCarsByColorId?ColorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);

  }


}





