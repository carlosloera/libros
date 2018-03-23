import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

/*
  Generated class for the ServicesBooksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesBooksProvider {
 
  public URL="http://openlibrary.org/search.json?q=";
  public URL2 = "http://openlibrary.org/search.json?q=";
  constructor(public http: Http) {
    console.log('Hello ServicesBooksProvider Provider');
  }

  getBooks(nombre:string  ){

    let headers=new Headers({
      'Content-Type':'application/json'
    });
    let url = this.URL+nombre;
    console.log(nombre);
    return this.http.get(url)
                    .map(res=>{
                      console.log("json"+res.json());
                      return res.json();
                    });

  }



}
