import {  Page } from '@playwright/test';
import { MainPage } from '../pages/main.page';

export class SearchStep {

	readonly mainPage: MainPage;

	constructor(mainPage: any) {
		this.mainPage = mainPage;
	}

	async simpleSearch(word: string) {
		await this.mainPage.goto();
		await this.mainPage.searchWord(word)
		await this.mainPage.searchInGoogle()
		await this.mainPage.checkTitleafterSearch(word)
	}

}