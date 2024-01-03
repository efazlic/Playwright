export class CavesPage {
    private page: any;
    private caves_tab: any;
    public removeAllFiltersButton: any;

    constructor(page: any) {
        this.page = page;
        this.caves_tab = page.locator('div.font-medium.text-sm').getByText("Caves");
        this.removeAllFiltersButton = page.locator('button').getByText("Remove all filters");
    }

    async clickOnCavesTab() {
        await this.caves_tab.click();
        await this.page.waitForTimeout(2000);
    }
}