import { Page } from '@playwright/test';
import { DetailsBoxPage } from '../pages/DetailsBoxPage.ts';
import { LoginPage } from '../pages/LoginPage.ts';

export async function commonSetup(page: Page): Promise<void> {

    const Details: DetailsBoxPage = new DetailsBoxPage(page);
    await Details.goToPage();
    await Details.clickOnLoginIcon();

    const Login: LoginPage = new LoginPage(page);
    await Login.enterUsername();
    await Login.enterPassword();
    await Login.clickOnContinueButton();
    //await Details.clickOnProfileIcon();
    //await Details.clickOnLogoutOption();

}