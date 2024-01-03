export class IslandsPage {
    private page: any;
    private islands_tab: any;
    public removeAllFiltersButton: any;

    constructor(page: any) {
        this.page = page;
        this.islands_tab = page.locator('div.font-medium.text-sm').getByText("Islands");
        this.removeAllFiltersButton = page.locator('button').getByText("Remove all filters");
    }

    async clickOnIslandsTab() {
        await this.islands_tab.click();
        await this.page.waitForTimeout(2000);
    }
}