import { Routes } from '@angular/router';
import { MenuComponent } from './PAGES/menu/menu.component';
import { NavMainComponent } from './page/nav-main/nav-main.component';
import { AdminComponent } from './page/admin/admin.component';
export const routes: Routes = [
        { path: "menu", component: MenuComponent},
        { path: "", component:NavMainComponent},
        {path: "admin",component:AdminComponent}
];
