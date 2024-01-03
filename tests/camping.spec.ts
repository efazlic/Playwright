import { test, expect } from '@playwright/test';
import { CampingPage } from '../pages/CampingPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the camping page and its items', async ({ page }) => {

    const Camping: CampingPage = new CampingPage(page);

    await commonSetup(page);

    await Camping.clickOnCampingTab();

    const button = await Camping.removeAllFiltersButton.isVisible();
    await page.waitForTimeout(2000);
    expect(button).toBe(true);

});