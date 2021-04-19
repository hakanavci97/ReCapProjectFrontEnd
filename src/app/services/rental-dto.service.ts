import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDto } from '../models/rentaldto';

@Injectable({
  providedIn: 'root'
})
export class RentalDtoService {

  apiUrl='https://localhost:44313/api/rentals/GetRentalDetails';

  constructor(private httpClient:HttpClient) { }

  getRentailDto(): Observable<ListResponseModel<RentalDto>>{

  return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrl);

  }
}
