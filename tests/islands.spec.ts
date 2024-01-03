import { test, expect } from '@playwright/test';
import { IslandsPage } from '../pages/IslandsPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the islands page and its items', async ({ page }) => {

    const Islands: IslandsPage = new IslandsPage(page);

    await commonSetup(page);

    await Islands.clickOnIslandsTab();

    const button = await Islands.removeAllFiltersButton.isVisible();
    expect(button).toBe(true);

});