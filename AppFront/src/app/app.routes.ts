import { Routes } from '@angular/router';
import { MenuComponent } from './PAGES/menu/menu.component';
import { MenuPastasComponent } from './PAGES/menu-pastas/menu-pastas.component';
import { MenuBebidasComponent } from './PAGES/menu-bebidas/menu-bebidas.component';
import { NavMainComponent } from './page/nav-main/nav-main.component';
import { AdminComponent } from './page/admin/admin.component';
export const routes: Routes = [
        { path: "menu", component: MenuComponent},
        { path: "menu-pastas", component: MenuPastasComponent},
        { path: "menu-bebidas", component: MenuBebidasComponent},
        { path: "", component:NavMainComponent},
        {path: "admin",component:AdminComponent}
];
