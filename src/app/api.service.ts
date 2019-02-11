import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class ApiService {
  constructor(private http : HttpClient) {     
   }
    getApi(){
    return this.http.get('https://api.myglamapp.pl/api/categories?language=EN');
   }
}
