import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class ApiService {
  constructor(private http : HttpClient) {     
   }
    getApi(){
      this.http.get('https://api.myglamapp.pl/api/categories?language=EN').subscribe(res => {
        console.log(res)
      })
    return this.http.get('http://api.myglamapp.pl/api/categories?language=EN');
   }
}
