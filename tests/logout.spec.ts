import { test, expect } from '@playwright/test';
import { DetailsBoxPage } from '../pages/DetailsBoxPage.ts';
import { commonSetup } from './commonSetup.ts';

test('log out from the app', async ({ page }) => {

    const Logout: DetailsBoxPage = new DetailsBoxPage(page);

    await commonSetup(page);

    await Logout.clickOnProfileIcon();

    await Logout.clickOnLogoutOption();

});