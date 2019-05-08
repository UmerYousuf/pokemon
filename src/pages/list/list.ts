import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class FavoriteComponent implements OnInit 
 
  constructor(private af: AngularFire) { }

  items: FirebaseListObservable<any[]>;
  groceryList: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.items = this.af.database.list('/favoriteItem');
    this.groceryList = this.af.database.list('/items');
  }

  add(item) {
    this.groceryList.push(item);
  }

  delete(item) {
    this.items.remove(item);
  }
}