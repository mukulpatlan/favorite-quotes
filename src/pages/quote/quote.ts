import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
	person: string;
	text: string;
  constructor(public viewCtrl: ViewController, 
  	public navParams: NavParams,
  	private quoteService: QuotesService) {this.navParams.get('person')
  }

  ionViewDidLoad(){
  	this.person = this.navParams.get('person');
  	this.text = this.navParams.get('text');
  }

  onClose(remove = false){
  	this.viewCtrl.dismiss(remove);
  }
}
