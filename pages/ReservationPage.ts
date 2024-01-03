export class ReservationPage {

    private page: any;
    private reserveButton: any;
    private cancelReservationButton: any;

    constructor(page: any) {
        this.page = page;
        this.reserveButton = page.locator('button').getByText("Reserve");
        this.cancelReservationButton = page.locator('button').getByText("Cancel reservation").first();
    }

    async clickOnReserveButton() {
        await this.reserveButton.click();
        await this.page.waitForTimeout(3000);
    }

    async clickOnCancelReservationButton() {
        await this.cancelReservationButton.click();
    }
}