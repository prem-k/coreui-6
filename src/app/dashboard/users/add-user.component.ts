import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
	
	public form:any = {};
  constructor(private apiService : ApiService ) {
    this.form.country = 0;
    this.form.status = 0;
    this.form.type = 2;
    this.form.gender = 'male';
  }

  ngOnInit() {

  }

  saveData(){
    this.form.errors = {};
    let request = this.apiService.addUser();
    request.data = this.form;
    this.apiService.submitRequest(request).subscribe( (res:any) => {
      var data = res.json();
      if(data.status == false){
        this.form.errors = data.errors;
      }

    });
  }

}
