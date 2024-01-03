export class BarnsPage {
    private page: any;
    private barns_tab: any;
    public removeAllFiltersButton: any;

    constructor(page: any) {
        this.page = page;
        this.barns_tab = page.locator('div.font-medium.text-sm').getByText("Barns");
        this.removeAllFiltersButton = page.locator('button').getByText("Remove all filters");
    }

    async clickOnBarnsTab() {
        await this.barns_tab.click();
        await this.page.waitForTimeout(2000);
    }
}