import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GridComponent } from './grid/grid.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [{
    path: 'home',
    component: HomeComponent
},
{
    path: 'about/:id',
    component: AboutComponent
},{
    path: 'grid',
    component: GridComponent
    },
    {
        path: 'chart',
        component: ChartComponent
    }   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
