import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarDto } from 'src/app/models/cardto';
import { CarImage } from 'src/app/models/carimage';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarimageService } from 'src/app/services/carimage.service';


@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDtos: CarDto[] = [];
  apiUrl = "https://localhost:44313";
  carImages="";
  filterText="";

  constructor(private carDtoService: CarDtoService, private carImageService: CarimageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"])
      {
        this.getCarsByBrand(params["brandId"])
      
      }
      else if(params["colorId"])
      {
        this.getCarsByBrand(params["colorId"])
      
      }

      else
      {
        this.getCarDto();
     
      }
    })
   
    


  }
  getCarDto() {
    this.carDtoService.getCarsDto().subscribe(response => {
    
      this.carDtos = response.data
      
       console.log(this.apiUrl+this.carImages);
     
    })
  }

  getCarsByBrand(brandId:number){
    this.carDtoService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDtos=response.data;
      console.log(this.carDtos);
    })

  }

  getCarsByColor(colorId:number){
    this.carDtoService.getCarsByColor(colorId).subscribe(response=>{
      this.carDtos=response.data;
    })
  }
}



