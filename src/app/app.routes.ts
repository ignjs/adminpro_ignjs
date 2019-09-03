import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { RegisterComponent } from "./login/register.component";
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graph1Component } from './pages/graph1/graph1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes: Routes = [
    /* { 
        path: '', 
        component: PagesComponent, 
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'progress', component: ProgressComponent},
            { path: 'grafica', component: Graph1Component},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]}, */
    
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent}, 
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});