import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ServicesBooksProvider } from '../../providers/services-books/services-books';
import { BookPage } from '../book/book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public libros=[];
  
  public nombre:string;
  public IMGS="http://covers.openlibrary.org/b/id/";
  constructor(public navCtrl: NavController, 
              public libro:ServicesBooksProvider,
              public loadingCtrl:LoadingController) {

  }



  obtener(){

    let loading=this.loadingCtrl.create({
      content:"Loading"
    });
    loading.present();
            this.libro.getBooks(this.nombre)
                 .subscribe( res =>{
                  loading.dismiss();
                   console.log(res.docs);
                  this.libros=res.docs;
                 
                  /*for(let libro of this.libros){
                    console.log(libro);
                  }
                  */
                 }); 
  }

  print(){
    
  }

  cambiarPagina(object){
    this.navCtrl.push(BookPage, {
       libro:object
    });
  }



}
