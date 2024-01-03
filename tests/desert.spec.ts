import { test, expect } from '@playwright/test';
import { DesertPage } from '../pages/DesertPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the desert page and its items', async ({ page }) => {

    const Desert: DesertPage = new DesertPage(page);

    await commonSetup(page);

    await Desert.clickOnDesertTab();

    const button = await Desert.removeAllFiltersButton.isVisible();
    expect(button).toBe(true);

});