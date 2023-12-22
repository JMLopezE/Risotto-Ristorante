import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservesService } from '../Servicios/reserve.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reserve } from '../models/reservamodels';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
        registerForm:FormGroup

  constructor(private ReservesService: ReservesService, private router:Router){
    this.registerForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
    });
}

onSubmit(){
    const reserve:Reserve = {
        email: this.registerForm.value.email,
        name: this.registerForm.value.name,
        last_name: this.registerForm.value.last_name,
        phone: this.registerForm.value.phone,
        password: this.registerForm.value.password,
        number_people: this.registerForm.value.number_people,
        special_occasions: this.registerForm.value.special_occasions,
        date_reserve: this.registerForm.value.date_reserve,
        hour_reserve: this.registerForm.value.hour_reserve,
        role: this.registerForm.value.role,
    }

    this.ReservesService.register(reserve).subscribe({
        next:(token)=>{
            this.adminService.saveToken(token)
            this.router.navigate(['/admin'])
        },
        error:(error) =>{
            console.log(error);
        }
    })
}

}

