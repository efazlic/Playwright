import { test, expect } from '@playwright/test';
import { LakePage } from '../pages/LakePage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the lake page and its items', async ({ page }) => {

    const Lake: LakePage = new LakePage(page);

    await commonSetup(page);

    await Lake.clickOnLakeTab();

    const button = await Lake.removeAllFiltersButton.isVisible();
    expect(button).toBe(true);

});