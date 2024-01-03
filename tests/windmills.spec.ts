import { test, expect } from '@playwright/test';
import { WindmillsPage } from '../pages/WindmillsPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the windmills page and its items', async ({ page }) => {

    const Windmills: WindmillsPage = new WindmillsPage(page);

    await commonSetup(page);

    await Windmills.clickOnWindmillsTab();

    const button = await Windmills.removeAllFiltersButton.isVisible();
    expect(button).toBe(true);

});