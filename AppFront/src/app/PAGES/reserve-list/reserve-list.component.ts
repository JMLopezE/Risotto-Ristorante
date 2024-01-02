import { Component, OnInit } from '@angular/core';
import { ReservesService } from '../../Servicios/reserve.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Reserve } from '../../models/reservamodels';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reserve-list',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule],
  templateUrl: './reserve-list.component.html',
  styleUrl: './reserve-list.component.css'
})
export class ReserveListComponent implements OnInit {

  reservas:Reserve[] = []

  constructor(private reservesService:ReservesService){}

  ngOnInit(){
    this.reservesService.getReserveList().subscribe({
      next:(Reserve)=> {
        this.reservas = Reserve
      },
      error:(error)=> {
        console.log(error)
      }
    })
  }
}
