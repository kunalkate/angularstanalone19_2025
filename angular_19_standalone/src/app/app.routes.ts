import { Routes } from '@angular/router';
import { ParentToChildComponent } from './pages/parent-to-child/parent-to-child.component';
import { ChildComponent } from './pages/child/child.component';

export const routes: Routes = [

    { path: '', redirectTo: '/parent', pathMatch: 'full' },  // Default route
    {path:'parent', component:ParentToChildComponent},
    {path:'child', component:ChildComponent},


    {path:'**', redirectTo:'/parent'}

];
