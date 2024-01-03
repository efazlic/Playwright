import { test, expect } from '@playwright/test';
import { ModernPage } from '../pages/ModernPage.ts';
import { ReservationPage } from '../pages/ReservationPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the modern page and its items', async ({ page }) => {

    const Modern: ModernPage = new ModernPage(page);
    const Reservation: ReservationPage = new ReservationPage(page);

    await commonSetup(page);

    await Modern.clickOnModernTab();
    await page.waitForTimeout(2000);
    await Modern.clickOnModernItem();

    const modernItemTitleText = await Modern.modern_item_title.textContent();
    expect(modernItemTitleText).toBe("New York Central Park Apartment");

    await Reservation.clickOnReserveButton();
    await page.waitForTimeout(3000);
    await Reservation.clickOnCancelReservationButton();
    await page.waitForTimeout(2000);

    const noTripsFoundText = await Modern.no_trips_found_text.textContent();
    expect(noTripsFoundText).toBe("No trips found");

});