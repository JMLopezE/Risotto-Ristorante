import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CarruselComponent } from '../carrusel/carrusel.component'; 


@Component({
  selector: 'app-menu-bebidas',
  standalone: true,
  imports: [CommonModule,RouterModule, CardComponent ,CarruselComponent],
  templateUrl: './menu-bebidas.component.html',
  styleUrl: './menu-bebidas.component.css'
})
export class MenuBebidasComponent {

}
