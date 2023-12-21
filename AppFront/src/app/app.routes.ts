import { Routes } from '@angular/router';
import { MenuComponent } from './PAGES/menu/menu.component';
import { AdminComponent } from './page/admin/admin.component';
import { HomeComponent } from './page/home/home.component';


export const routes: Routes = [
        { path: "menu", component: MenuComponent },
        { path: "admin", component:AdminComponent },
        { path: "home", component:HomeComponent }

];
