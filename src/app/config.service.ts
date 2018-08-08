import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ConfigService {

  	constructor() { } 

  	public configInfo : {} = ''; // aise he

	//public apiUrl = 'http://localhost:3000/';

	public apiUrl = 'http://192.168.254.59/victoryledbackend/';

	public pusherTimeout = 60*60*1000;  // 1 Hour

	public appVersion = '1.27.4';

	public allowLogs: false; 

}



