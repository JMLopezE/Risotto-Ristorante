import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  // @Input () img: String = ""
  // @Input () title: String = "Titulo"
  // @Input () descripcion: String = "Descrioción del plato"
  // @Input () is_not:Boolean = false
  menus = [
    {
      imagen: "https://vapiano.com/app/uploads/sites/4/2023/03/Pasta-Hot-Sweet-Bacon-768x768.jpg",
      nombre: "Hot Sweet Bacon",
      descripcion: "Tocineta crujiente, champiñones, cebolla caramelizada, vino blanco, cebollín, crema de leche, romero y peperoncino."
    },
    {
      imagen: "https://vapiano.com/app/uploads/sites/4/2023/03/Pasta-Gamberetti-E-Spinaci-768x768.jpg",
      nombre: "Gamberetti E Spinacci",
      descripcion: "Camarones, pesto de albahaca con crema, queso parmesano, espinaca baby, tomates cherry y cebolla blanca."
    },
    {
      imagen: "https://vapiano.com/app/uploads/sites/4/2023/03/Pasta-Filetto-Di-Manzo-Vino-Rosso-768x768.jpg",
      nombre: "Filetto Di Manzo con Vino Rosso",
      descripcion: "Lomo de res, champiñones, calabacín, zanahoria, cebolla balsámica en salsa de reducción de vino tinto y crema de leche."
    },
    {
      imagen: "https://vapiano.com/app/uploads/sites/4/2023/03/Pasta-Bolognese-768x768.jpg",
      nombre: "Bolognese",
      descripcion: "Salsa bolognese, tomates cherry y zanahoria con salsa pomodoro."
    },
    {
      imagen: "https://vapiano.com/app/uploads/sites/4/2023/03/pasta-Carbonara-768x768.jpg",
      nombre: "Carbonara",
      descripcion: "Tocineta ahumada, cebolla, crema de leche, huevo, queso parmesano con un toque de perejil."
    },
    {
      imagen: "https://bing.com/th?id=OSK.dec2b175629975625e2bdb39746846a6",
      nombre: "Ravioli con ricotta e rucula",
      descripcion: "Hechos en casa rellenos de queso ricotta y rúgula, caldo de verduras, tomates cherry y mantequilla."
    }

  ]

}
