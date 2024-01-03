import { test, expect } from '@playwright/test';
import { LuxPage } from '../pages/LuxPage.ts';
import { ReservationPage } from '../pages/ReservationPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the lux page and its items', async ({ page }) => {

    const Lux: LuxPage = new LuxPage(page);
    const Reservation: ReservationPage = new ReservationPage(page);

    await commonSetup(page);

    await Lux.clickOnLuxTab();
    await page.waitForTimeout(2000);
    await Lux.clickOnLuxItem();

    const luxItemTitleText = await Lux.lux_item_title.textContent();
    expect(luxItemTitleText).toBe("Luxemburg Lux");

    await Reservation.clickOnReserveButton();
    await page.waitForTimeout(3000);
    await Reservation.clickOnCancelReservationButton();
    await page.waitForTimeout(2000);

    const noTripsFoundText = await Lux.no_trips_found_text.textContent();
    expect(noTripsFoundText).toBe("No trips found");

});