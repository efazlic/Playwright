import { test, expect } from '@playwright/test';
import { SkiingPage } from '../pages/SkiingPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the skiing page and its items', async ({ page }) => {

    const Skiing: SkiingPage = new SkiingPage(page);

    await commonSetup(page);

    await Skiing.clickOnSkiingTab();

    const button = await Skiing.removeAllFiltersButton.isVisible();
    expect(button).toBe(true);

});