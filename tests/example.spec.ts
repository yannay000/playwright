import { test, expect, Page } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { SearchStep } from '../steps/search.step'

test.beforeEach(async ({ page }) => {
  //await page.goto('https://google.com');
});

test.describe('Google', () => {

  test('Search simple word', async ({ page }) => {
    const mainPage = new MainPage(page);
    const searchStep = new SearchStep(mainPage)
    await searchStep.simpleSearch('Привет')
  });

  test('Search long phrase', async ({ page }) => {
    const mainPage = new MainPage(page);
    const searchStep = new SearchStep(mainPage)
    await searchStep.simpleSearch('довольно длинная фраза длинною скажем более 100 символов которая несмотря на это находит какие-то результаты знаки препинания опустим')
  });

  test('Search without result', async ({ page }) => {
    const mainPage = new MainPage(page);
    const searchStep = new SearchStep(mainPage)
    await searchStep.simpleSearch('фтмлхупп7фс00ьффуе5')
    await mainPage.nothingFinded()
  });

});


