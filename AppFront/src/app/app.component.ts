import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './page/footer/footer.component';
import { FormulariofooterComponent } from './page/formulariofooter/formulariofooter.component';
import { NavMainComponent } from './page/nav-main/nav-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FooterComponent, FormulariofooterComponent,NavMainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Risotto-Ristorante';
}
