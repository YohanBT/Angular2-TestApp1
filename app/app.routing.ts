import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { DashboardComponent } from './dashboard.component';
import { PostDetailComponent } from './post-detail.component';

const appRoutes: Routes =[
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
    path: 'detail/:id',
    component: PostDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];

export const routing = RouterModule.forRoot(appRoutes);