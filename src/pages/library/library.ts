import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesPage } from '../quotes/quotes';

import Quotes from '../../data/quotes'
/**
 * Generated class for the LibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
	quoteCollection : {category: string, quotes: Quote[], icon: string}[];
	quotesPage = QuotesPage;
	ngOnInit(){
		this.quoteCollection = Quotes
	}
}
