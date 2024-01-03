export class DesertPage {
    private page: any;
    private desert_tab: any;
    public removeAllFiltersButton: any;

    constructor(page: any) {
        this.page = page;
        this.desert_tab = page.locator('div.font-medium.text-sm').getByText("Desert");
        this.removeAllFiltersButton = page.locator('button').getByText("Remove all filters");
    }

    async clickOnDesertTab() {
        await this.desert_tab.click();
        await this.page.waitForTimeout(2000);
    }
}