import { test, expect } from '@playwright/test';
import { PoolsPage } from '../pages/PoolsPage.ts';
import { ReservationPage } from '../pages/ReservationPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the pools page and its items', async ({ page }) => {

    const Pools: PoolsPage = new PoolsPage(page);
    const Reservation: ReservationPage = new ReservationPage(page);

    await commonSetup(page);

    await Pools.clickOnPoolsTab();
    await page.waitForTimeout(2000);
    await Pools.clickOnPoolsItem();

    const poolsItemTitleText = await Pools.pools_item_title.textContent();
    expect(poolsItemTitleText).toBe("swimming pool in Mostar");

    await Reservation.clickOnReserveButton();
    await Reservation.clickOnCancelReservationButton();

    const noTripsFoundText = await Pools.no_trips_found_text.textContent();
    expect(noTripsFoundText).toBe("No trips found");

});