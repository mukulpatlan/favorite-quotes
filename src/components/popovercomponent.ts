import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
	template: `
		<ion-grid>
			<h3 text-center>Share on</h3>
	      	<button ion-button (click)="close()">
				Facebook
	      	</button>
	      	<button ion-button (click)="close()">
				Twitter
	      	</button>
	      	<button ion-button (click)="close()">
				Whatsapp
	      	</button>
		</ion-grid>
	`
})
export class PopoverPage{
	close(){

	}
}	