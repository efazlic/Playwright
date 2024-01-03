import { test, expect } from '@playwright/test';
import { BeachPage } from '../pages/BeachPage.ts';
//import { DetailsBoxPage } from '../pages/DetailsBoxPage.ts';
import { ReservationPage } from '../pages/ReservationPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the beach page and its items', async ({ page }) => {

    const Beach: BeachPage = new BeachPage(page);
    //const Details: DetailsBoxPage = new DetailsBoxPage(page);
    const Reservation: ReservationPage = new ReservationPage(page);
    
    await commonSetup(page);

    await Beach.clickOnBeachTab();
    await page.waitForTimeout(2000);
    await Beach.clickOnBeachItem();

    const beachItemTitleText = await Beach.beach_host_title.textContent();
    expect(beachItemTitleText).toBe("Lajla");
    //await Details.clickOnProfileIcon();
    //await Details.clickOnLogoutOption();

    await Reservation.clickOnReserveButton();
    await page.waitForTimeout(2000);
    await Reservation.clickOnCancelReservationButton();
    await page.waitForTimeout(2000);

    const noTripsFoundText = await Beach.no_trips_found_text.textContent();
    expect(noTripsFoundText).toBe("No trips found");

});