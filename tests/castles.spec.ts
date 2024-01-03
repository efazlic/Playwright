import { test, expect } from '@playwright/test';
import { CastlesPage } from '../pages/CastlesPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the castles page and its items', async ({ page }) => {

    const Castles: CastlesPage = new CastlesPage(page);
    
    await commonSetup(page);

    await Castles.clickOnCastlesTab();

    const button = await Castles.removeAllFiltersButton.isVisible();
    await page.waitForTimeout(2000);
    expect(button).toBe(true);

});