import { Routes } from '@angular/router';
import { MenuComponent } from './PAGES/menu/menu.component';
import { MenuPastasComponent } from './PAGES/menu-pastas/menu-pastas.component';

export const routes: Routes = [
        { path: "menu", component: MenuComponent},
        { path: "menu-pastas", component: MenuPastasComponent}
];
