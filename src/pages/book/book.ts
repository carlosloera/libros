import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  public libro;
  public IMGS="http://covers.openlibrary.org/b/id/";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.libro = navParams.get('libro');
    console.log("libro");
    console.log(this.libro); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

}
