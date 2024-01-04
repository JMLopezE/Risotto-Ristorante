import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../../Servicios/admin.service';
import { Admin, Token } from '../../models/admin.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-modal',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterModule,ReactiveFormsModule],
  templateUrl: './admin-modal.component.html',
  styleUrl: './admin-modal.component.css'
})

export class AdminModalComponent {
  registerForm:FormGroup;

  constructor(private adminService: AdminService, private router:Router){
    this.registerForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
        phone: new FormControl()
    });
}

onSubmit(){
    console.log(this.registerForm.value)
    const register = this.adminService.register(this.registerForm.value).subscribe(
        response => {
            console.log(response)
            this.router.navigate(['/admin'])
        },
        error => {
            console.log(error)
        }
        )
        console.log(register)
}

}

