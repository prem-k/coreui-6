import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

	public email:any;
	public password:any;
	public loginError:any;

	constructor(private router: Router, private apiService : ApiService, private activatedRoute : ActivatedRoute) {
	  
	   const queryParams = this.activatedRoute.snapshot.queryParams;
       let logout = queryParams.logout;
       if(logout === 'true'){
          localStorage.removeItem('access_token');
          localStorage.clear();
          this.router.navigate(["/dashboard/login"]);
       }

	  /*this.router.events.subscribe((res) => { 
	    if(this.apiService.isLogin() && this.router.url === '/login'){
	          this.router.navigate(["/dashboard"]);
	      }
	  });*/
	  if(this.apiService.isLogin()){
	      this.router.navigate(["/dashboard"]);
	  }
	}

	ngOnInit() {
	//super.ngOnInit();
	}

	validateEmail(email ){
		return true;
	}

	login(){
		
		this.loginError = '';
		if(this.validateEmail(this.email)){
		    let request:any = this.apiService.login();
		    request.data.email = this.email;
		    request.data.password = this.password;
		    this.apiService.submitRequest(request).subscribe((res : any) => {
		          var data = this.apiService.parseResponse(res); 
		          if(data.status === 'success'){

		            let userInfo = data.data.User;
		            localStorage.setItem('access_token',data.token);
		            localStorage.setItem('id', userInfo.id);
		            localStorage.setItem('name', userInfo.first_name);
		            localStorage.setItem('type', userInfo.user_role);
		            localStorage.setItem('email', userInfo.email);
		            localStorage.setItem('phone', userInfo.mobile_number);
		            this.router.navigate(["/dashboard"]);
		            //this.router.navigateByUrl('/dashboard');
		          }else{
		            this.loginError = 'Please check your login credantials.';
		          }                  
		    });
		}
	}

}
