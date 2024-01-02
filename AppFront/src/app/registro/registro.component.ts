import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservesService } from '../Servicios/reserve.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Reserve } from '../models/reservamodels.js'

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
        registerForm:any;

  constructor(private ReservesService: ReservesService, private router:Router){
    this.registerForm = new FormGroup({
        name: new FormControl(),
        last_name: new FormControl(),
        email: new FormControl(),
        phone: new FormControl(),
        number_people: new FormControl(),
        special_occasions: new FormControl(),
        date_reserve: new FormControl(),
        hour_reserve: new FormControl(),
        info: new FormControl()
    })
}

async onSubmit(){
  console.log(this.registerForm.value)
  const reserve = await this.ReservesService.register(this.registerForm.value).subscribe(
    response=> {
      console.log(response)
    },
    error => {
      console.log(error)
    }
  )
  console.log(reserve)
}
}
    

