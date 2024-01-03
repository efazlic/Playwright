export class SkiingPage {
    private page: any;
    private skiing_tab: any;
    public removeAllFiltersButton;

    constructor(page: any) {
        this.page = page;
        this.skiing_tab = page.locator('div.font-medium.text-sm').getByText("Skiing");
        this.removeAllFiltersButton = page.locator('button').getByText("Remove all filters");
    }

    async clickOnSkiingTab() {
        await this.skiing_tab.click();
        await this.page.waitForTimeout(2000);
    }
}