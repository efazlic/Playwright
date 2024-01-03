import { test, expect } from '@playwright/test';
import { ArcticPage } from '../pages/ArcticPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the arctic page and its items', async ({ page }) => {

    const Arctic: ArcticPage = new ArcticPage(page);

    await commonSetup(page);

    await Arctic.clickOnArcticTab();

    const button = await Arctic.removeAllFiltersButton.isVisible();
    expect(button).toBe(true);

});