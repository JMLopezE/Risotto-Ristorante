import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-menu-pastas',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
  templateUrl: './menu-pastas.component.html',
  styleUrl: './menu-pastas.component.css'
})
export class MenuPastasComponent {

}
