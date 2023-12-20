import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() title:String = "soy el titulo"
}
