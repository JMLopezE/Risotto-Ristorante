import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../../Servicios/admin.service';
import { Admin } from '../../models/admin.models';

@Component({
  selector: 'app-admin-modal',
  standalone: true,
  imports: [RouterModule, RouterModule,ReactiveFormsModule],
  templateUrl: './admin-modal.component.html',
  styleUrl: './admin-modal.component.css'
})

export class AdminModalComponent {
  registerForm:FormGroup

  constructor(private adminService: AdminService, private router:Router){
    this.registerForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
    });
}

onSubmit(){
    const user:Admin = {
        password: this.registerForm.value.password,
        email: this.registerForm.value.email
    }

    this.adminService.login(user).subscribe({
        next:(token)=>{
            console.log(token)
            this.adminService.saveToken(token)
            this.router.navigate(['/admin'])
        },
        error:(error) =>{
            console.log(error);
        }
    })
}

}

