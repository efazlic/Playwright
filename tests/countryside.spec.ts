import { test, expect } from '@playwright/test';
import { CountrysidePage } from '../pages/CountrysidePage.ts';
import { ReservationPage } from '../pages/ReservationPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the countryside page and its items', async ({ page }) => {

    const Countryside: CountrysidePage = new CountrysidePage(page);
    const Reservation: ReservationPage = new ReservationPage(page);

    await commonSetup(page);

    await Countryside.clickOnCountrysideTab();
    await page.waitForTimeout(2000);
    await Countryside.clickOnCountrysideItem();

    const countrysideItemTitleText = await Countryside.countryside_item_title.textContent();
    expect(countrysideItemTitleText).toBe("Lukomir village");

    await Reservation.clickOnReserveButton();
    await Reservation.clickOnCancelReservationButton();

    const noTripsFoundText = await Countryside.no_trips_found_text.textContent();
    expect(noTripsFoundText).toBe("No trips found");

});