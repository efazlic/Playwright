export class ArcticPage {
    private page: any;
    private arctic_tab: any;
    public removeAllFiltersButton: any;

    constructor(page: any) {
        this.page = page;
        this.arctic_tab = page.locator('div.font-medium.text-sm').getByText("Arctic");
        this.removeAllFiltersButton = page.locator('button').getByText("Remove all filters");
    }

    async clickOnArcticTab() {
        await this.arctic_tab.click();
        await this.page.waitForTimeout(3000);
    }
}