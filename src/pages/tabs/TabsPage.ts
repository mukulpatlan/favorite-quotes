import { Component } from '@angular/core';

import { FavouritePage } from '../favourite/favourite';
import { LibraryPage } from '../library/library';

@Component({
	selector: 'page-tabs',
	template: `
		<ion-tabs>
			<ion-tab [root]="favouritePage" tabTitle="Favorites" tabIcon="heart"></ion-tab>
			<ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
		</ion-tabs>
	`
})

export class TabsPage{
	favouritePage = FavouritePage;
	libraryPage = LibraryPage;

}