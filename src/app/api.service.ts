import { Injectable} from '@angular/core';
import { ConfigService } from './config.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ApiService {

	public baseUrl : any = '';
    public pageLimit : any = '';
  	constructor(private http : Http, private configService : ConfigService) {
  		this.baseUrl = configService.apiUrl;
  		this.pageLimit = 10;
  	}

  	getToken(){
  		return 'fghgfhgfhf354f3h4fg3h54h5g4fg5h4gf5h4';
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

    login(){
		return {
			url: this.baseUrl+'user-login',
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
			url: this.baseUrl+'users-list',
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
