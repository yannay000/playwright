import { expect, Locator, Page } from '@playwright/test';

export class MainPage {

	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async goto() {
		await this.page.goto('https://google.com');
		await expect(this.page).toHaveTitle('Google');
	  }

	async searchWord(word: string) {
		await this.page.fill('[title=Поиск]', word);
	}

	async searchInGoogle() {
		await this.page.locator('[value="Поиск в Google"]').last().click()
	}

	async checkTitleafterSearch(word: string) {
		await expect(this.page).toHaveTitle(`${word} - Поиск в Google`);
	}

	async nothingFinded() {
		await expect(this.page.locator('text="ничего не найдено."')).toHaveCount(1)
	}

}