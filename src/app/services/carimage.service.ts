import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/cardto';
import { CarImage } from '../models/carimage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl = 'https://localhost:44313/api/';
  ImagePath="";
  constructor(private httpClient:HttpClient) { }
  
  
  GetCarImage(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/GetImagesByCarId?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}




