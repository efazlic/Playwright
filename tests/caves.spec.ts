import { test, expect } from '@playwright/test';
import { CavesPage } from '../pages/CavesPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the caves page and its items', async ({ page }) => {

    const Caves: CavesPage = new CavesPage(page);

    await commonSetup(page);

    await Caves.clickOnCavesTab();

    const button = await Caves.removeAllFiltersButton.isVisible();
    await page.waitForTimeout(2000);
    expect(button).toBe(true);

});