import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AdminService } from '../../Servicios/admin.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Admin, } from '../../models/admin.models';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [RouterModule, RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class AdminComponent {
    loginForm:any;

    constructor(private adminService: AdminService, private router:Router){
        this.loginForm = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        });
    }

    onSubmit(){       
        const admin:Admin = {
            password: this.loginForm.value.password,
            email: this.loginForm.value.email,
        }

        this.adminService.login(admin).subscribe({
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
