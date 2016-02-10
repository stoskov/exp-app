import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {DashboardComponent} from './components/dashboard/app.dashboard';
import {ListExpComponent} from './components/list-exp/app.list-exp';
import {NewExpComponent} from './components/new-exp/app.new-exp';

@Component({
    selector: 'my-app',
    templateUrl: 'app/router.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path:'/', name: 'Dashboard', component: DashboardComponent },
  { path:'/list-exp', name: 'ListExp', component: ListExpComponent },
  { path:'/new-exp', name: 'NewExp', component: NewExpComponent }
])

export class AppRouter { }
