import { test, expect } from '@playwright/test';
import { DetailsBoxPage } from '../pages/DetailsBoxPage.ts';
import { commonSetup } from './commonSetup.ts';

test('log out from the app', async ({ page }) => {

    const Logout: DetailsBoxPage = new DetailsBoxPage(page);

    await commonSetup(page);

    await Logout.clickOnProfileIcon();

    await Logout.clickOnLogoutOption();

    const logoutOption = await Logout.logout_option.isVisible();
    expect(logoutOption).toBe(false);
});