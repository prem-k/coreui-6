import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../dashboard/containers';

import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{
		path : 'dashboard',
		component : DefaultLayoutComponent,
		children : 	[
			{ 
				path: '', 
				component : HomeComponent,
				data : {
					title : 'Dashboard'
				}
			},
			{ 
				path : 'home',
				component : HomeComponent,
				data : {
					title : 'Dashboard'
				} 
			},
			/*{ 
				path : 'login', 
				component : LoginComponent,
				data : {
					title : 'Login'
				}  
			},*/
			{ 
				path : 'users', 
				component : UsersComponent,
				data : {
					title : 'Users'
				} 
			},
			{ 
				path : 'users/add-user', 
				component : AddUserComponent,
				data : {
					title : 'User'
				} 
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouteModule { }  

let dashboardRouteComponentArr:any = [];
for (let key in routes){
	if(routes[key].component){
		dashboardRouteComponentArr.push(routes[key].component);
		if(routes[key].children && routes[key].children.length > 0){
			for (let childKey in routes[key].children){
				dashboardRouteComponentArr.push(routes[key].children[childKey].component);
			}
		}
	}	
}
export const dashboardRoutingComponents = dashboardRouteComponentArr;
