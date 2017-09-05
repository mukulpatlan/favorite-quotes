import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../../components/popovercomponent';

import { Quote } from '../../data/quote.interface';

import { QuotesService } from '../../services/quotes';
/**
 * Generated class for the QuotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
	quoteGroup: {category: string, quotes: Quote[], icon: string};
	constructor(private navParams: NavParams, 
		private alertCntrl: AlertController,
		private quoteService: QuotesService,
		private popoverCntrl: PopoverController
		){}

	ionViewDidLoad(){
		this.quoteGroup = this.navParams.data;
	}

	addToFavorite(selectedQuote: Quote){
		const alert = this.alertCntrl.create({
			title: 'Add Quote',
			subTitle: 'Are you sure?',
			message: 'Are you sure you want to add the quote?',
			buttons: [
				{
					text: 'Yes, go ahead',
					handler: () => {
						this.quoteService.addQuoteToFavorite(selectedQuote);						
					},
				},
				{
					text: 'No, I changed my mind!',
					handler: () => {
						console.log('cancelled');
					},
				}
			]
		});
		alert.present();
	}

	openPopOver(quote: Quote){
		const popover = this.popoverCntrl.create(PopoverPage, quote);
		popover.present({
			ev: quote
		});
	}

	removeFromFavorite(quote: Quote){
		this.quoteService.removeQuoteToFavorite(quote);
	}

	isFavorite(quote: Quote){
		return this.quoteService.isQuoteFavorite(quote);
	}
}
