import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carimage';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car-image-detail',
  templateUrl: './car-image-detail.component.html',
  styleUrls: ['./car-image-detail.component.css']
})
export class CarImageDetailComponent implements OnInit {
  apiUrl = "https://localhost:44313";

  carImages:CarImage[]=[];

  constructor(private carImageService:CarimageService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
        this.GetCarImage(params["carId"]);
    })

  }

  GetCarImage(carId:number){
    this.carImageService.GetCarImage(carId).subscribe(response=>{
    this.carImages=response.data;
    })
  }

}
