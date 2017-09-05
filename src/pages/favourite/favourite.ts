import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';

import { QuotePage } from '../quote/quote';

import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class FavouritePage {
	favoriteQuote: Quote[];
  	constructor(
  		private quotesService: QuotesService,
  		private modalCntrl: ModalController,
      private settingServices: SettingsService) {
  	}

  	ionViewDidEnter() {
    	this.favoriteQuote = this.quotesService.getFavorite();
  	}

  	onViewQuote(quote: Quote){
  		const modal = this.modalCntrl.create(QuotePage, quote);
  		modal.present();
  		modal.onDidDismiss((remove: boolean) => {
	  		if(remove){
	  			this.onRemoveFromFavorite(quote);
	  		}
  		});
  	}

  	onRemoveFromFavorite(quote: Quote){
	  	this.quotesService.removeQuoteToFavorite(quote);
		  const position = this.favoriteQuote.findIndex((quoteEl: Quote) =>{
			  return quoteEl.id == quote.id;
		  })
		  this.favoriteQuote.splice(position, 1);
  	}	
    
    getBackground(){
      return this.settingServices.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    }

}
