import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public rowData : any = [];
  public p1:number = 1;
  public id:any  = '';
  public errors : any = '';
  public currentPage:number = 1;
  public searchKey:any = ''; 
  public limit:number = this.apiService.pageLimit;
  public offset:number = 0;
  public total_records:number = 0;
  public successMsg : any = '';	

  constructor(private router: Router, private apiService : ApiService, private activatedRoute : ActivatedRoute) {
      const queryParams = this.activatedRoute.snapshot.queryParams;
      let success = queryParams.success;
      if(success === 'true'){
        this.successMsg = this.apiService.successMsg;
      }
  }

	ngOnInit() {
		this.dataList('');
	}

	dataList(search){
		let request = this.apiService.usersList();		
		request.search.key = this.searchKey; 
      	request.search.offset = this.offset;
		this.apiService.submitRequest(request).subscribe( (res:any) => {
  			let response =  this.apiService.parseResponse(res); 
  			if(response.status == 'success'){
  			 	this.rowData = response.data;
  			 	this.total_records = response.count; 
        }else{
         	this.errors = response.errors;
      	}
		});
	}

	onPageChange(pageNo){
    this.currentPage = pageNo;
    this.offset = ((this.currentPage - 1) * this.limit);
    this.dataList(this.searchKey);
  }

}
