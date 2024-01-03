export class WindmillsPage {
    private page: any;
    private windmills_tab: any;
    public removeAllFiltersButton: any;

    constructor(page: any) {
        this.page = page;
        this.windmills_tab = page.locator('div.font-medium.text-sm').getByText("Windmills");
        this.removeAllFiltersButton = page.locator('button').getByText("Remove all filters");
    }

    async clickOnWindmillsTab() {
        await this.windmills_tab.click();
        await this.page.waitForTimeout(2000);
    }
}