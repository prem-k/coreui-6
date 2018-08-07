import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	public usersData : any = {};	

	constructor(private apiService : ApiService) { }

	ngOnInit() {
		this.users('');
	}

	users(search){
		let request = this.apiService.usersList();
		if(search && search.length > 0){
			request.search.key = search;
		}
		this.apiService.submitRequest(request).subscribe( (res:any) => {
			this.usersData =  res.json();
		});
	}

}
