export class PoolsPage {
    private page: any;
    private pools_tab: any;
    private pools_image: any;
    public pools_item_title: any;
    public no_trips_found_text: any;

    constructor(page: any) {
        this.page = page;
        this.pools_tab = page.locator('div.font-medium.text-sm').getByText("Pools");
        this.pools_image = page.locator('div.font-semibold.text-lg').getByText("Europe, Bosnia and Herzegovina");
        this.pools_item_title = page.locator('div.text-2xl.font-bold').getByText("swimming pool in Mostar");
        this.no_trips_found_text = page.locator('div.text-2xl.font-bold').getByText("No trips found");
    }

    async clickOnPoolsTab() {
        await this.pools_tab.click();
    }

    async clickOnPoolsItem() {
        await this.pools_image.click();
    }
}