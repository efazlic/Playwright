export class CampingPage {
    private page: any;
    private camping_tab: any;
    public removeAllFiltersButton: any;

    constructor(page: any) {
        this.page = page;
        this.camping_tab = page.locator('div.font-medium.text-sm').getByText("Camping");
        this.removeAllFiltersButton = page.locator('button').getByText("Remove all filters");
    }

    async clickOnCampingTab() {
        await this.camping_tab.click();
        await this.page.waitForTimeout(2000);
    }
}