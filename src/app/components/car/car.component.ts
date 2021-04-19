import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/cardto';
import { CarDtoService } from 'src/app/services/car-dto.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carDtos: CarDto[] = [];

  constructor(private carDtoService: CarDtoService,  private activatedRoute: ActivatedRoute) { }

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
      console.log(this.carDtos);

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
