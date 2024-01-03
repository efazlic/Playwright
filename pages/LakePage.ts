export class LakePage {
    private page: any;
    private lake_tab: any;
    public removeAllFiltersButton: any;

    constructor(page: any) {
        this.page = page;
        this.lake_tab = page.locator('div.font-medium.text-sm').getByText("Lake");
        this.removeAllFiltersButton = page.locator('button').getByText("Remove all filters");
    }

    async clickOnLakeTab() {
        await this.lake_tab.click();
        await this.page.waitForTimeout(2000);
    }
}