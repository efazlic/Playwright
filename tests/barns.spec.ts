import { test, expect } from '@playwright/test';
import { BarnsPage } from '../pages/BarnsPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the barns page and its items', async ({ page }) => {

    const Barns: BarnsPage = new BarnsPage(page);

    await commonSetup(page);

    await Barns.clickOnBarnsTab();

    const button = await Barns.removeAllFiltersButton.isVisible();
    expect(button).toBe(true);

});




