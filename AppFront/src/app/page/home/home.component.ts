import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMainComponent } from '../nav-main/nav-main.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NavMainComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
