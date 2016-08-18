"use strict";
var router_1 = require('@angular/router');
var posts_component_1 = require('./posts.component');
var dashboard_component_1 = require('./dashboard.component');
var post_detail_component_1 = require('./post-detail.component');
var appRoutes = [
    {
        path: 'posts',
        component: posts_component_1.PostsComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: post_detail_component_1.PostDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map