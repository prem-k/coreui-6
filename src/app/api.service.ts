import { Injectable} from '@angular/core';
import { ConfigService } from './config.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ApiService {

	public pageLimit:number = 10; 
	public baseUrl : any = '';
	public uploadPath : any = '';

  	constructor(private http : Http, private configService : ConfigService) {
  		this.baseUrl = configService.apiUrl;
  		this.uploadPath = this.configService.apiUrl.replace('index.php/','')+'assets/uploads/';
  	}  

  	isLogin(){
  		if(localStorage.getItem('access_token') !=''){
  			if(localStorage.getItem('access_token') == null){
  				return false;
  			}
  			return true;
  		}else{
  			return false;
  		}
  	}

  	getToken(){
  		return localStorage.getItem('access_token');
  	}

  	filterData(data){
  		return data.json();
  	}

  	submitRequest(aRequest){        
		if(aRequest.method === 'POST'){
			let headers  = new Headers({ 'Content-Type': 'application/json','token': this.getToken()}); // ... Set content type to JSON
			//headers  = new Headers({ 'token': this.getToken()});
			let options  = new RequestOptions({ 
									headers: headers,
									search : Object.assign({},aRequest.search) 
							}); // Create a request option
			let body = JSON.stringify(aRequest.data);
			return this.http.post(aRequest.url, body, options);
		}else{
			let options  = new RequestOptions({ 
									search : Object.assign({},aRequest.search) 
							}); // Create a request option
			return this.http.get(aRequest.url,options);
		}
        
    }

    parseResponse(res){
    	let response = res.json();
    	return response.apiResponse;
    }

    login(){
		return {
			url: this.baseUrl+'users/userLogin.json',
			method : 'POST',
			dataType: 'json',
			search : {
				search : '',
				offset : 0,
				limit : this.pageLimit	
			},
			data: {
				'email' : '',
				'password' : ''
				
			}
		};
	};

	addUser(){
		return {
			url: this.baseUrl+'add-user',
			method : 'POST',
			dataType: 'json',			
			data: {

			}
		};
	};

	usersList(){
		return {
			url: this.baseUrl+'users/getUsers.json',
			method : 'GET',
			dataType: 'json',			
			search : {
				key : '',
				offset : 0,
				limit : this.pageLimit	
			}
		};
	};

	categoryList(){
		return {
			url: this.baseUrl+'category-list',
			method : 'GET',
			dataType: 'json',			
			search : {
				key : '',
				parent_category : 0,
				offset : 0,
				limit : this.pageLimit	
			}
		};
	};

	addCategory(){
		return {
			url: this.baseUrl+'category/add-category',
			method : 'POST',
			dataType: 'json',			
			data: {

			}
		};
	};

	products(){
		return {
			url: this.baseUrl+'products',
			method : 'GET',
			dataType: 'json',			
			search : {
				key : '',
				offset : 0,
				limit : this.pageLimit	
			}
		};
	};

	addProduct(){
		return {
			url: this.baseUrl+'products/add',
			method : 'POST',
			dataType: 'json',			
			search : {
				key : '',
				offset : 0,
				limit : this.pageLimit	
			}
		};
	}

}
