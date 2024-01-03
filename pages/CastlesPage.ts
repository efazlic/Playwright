export class CastlesPage {
    private page: any;
    private castles_tab: any;
    public removeAllFiltersButton: any;

    constructor(page: any) {
        this.page = page;
        this.castles_tab = page.locator('div.font-medium.text-sm').getByText("Castles");
        this.removeAllFiltersButton = page.locator('button').getByText("Remove all filters");
    }

    async clickOnCastlesTab() {
        await this.castles_tab.click();
        await this.page.waitForTimeout(3000);
    }
}