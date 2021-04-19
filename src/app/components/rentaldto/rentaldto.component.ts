import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rentaldto';
import { RentalDtoService } from 'src/app/services/rental-dto.service';

@Component({
  selector: 'app-rentaldto',
  templateUrl: './rentaldto.component.html',
  styleUrls: ['./rentaldto.component.css']
})
export class RentaldtoComponent implements OnInit {

 rentalDtos:RentalDto[]=[];



  constructor(private rentalDtoService:RentalDtoService) { }

  ngOnInit(): void {
    this.getRentalDto();
  }

  getRentalDto(){
    this.rentalDtoService.getRentailDto().subscribe(response=>{
      this.rentalDtos=response.data;
      
    })
  }

}
