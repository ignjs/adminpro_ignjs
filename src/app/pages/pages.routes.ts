import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';

const PagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
        { path: 'dashboard', component: DashboardComponent},
        { path: 'progress', component: ProgressComponent},
        { path: 'grafica', component: Graph1Component},
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

        ]        
    }
];

export const PAGES_ROUTES = RouterModule.forChild( PagesRoutes );