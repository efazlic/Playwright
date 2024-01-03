export class LuxPage {
    private page: any;
    private lux_tab: any;
    private lux_image: any;
    public lux_item_title: any;
    public no_trips_found_text: any;

    constructor(page: any) {
        this.page = page;
        this.lux_tab = page.locator('div.font-medium.text-sm').getByText("Lux");
        this.lux_image = page.locator('div.font-semibold.text-lg').getByText("Europe, Luxembourg");
        this.lux_item_title = page.locator('div.text-2xl.font-bold').getByText("Luxemburg Lux");
        this.no_trips_found_text = page.locator('div.text-2xl.font-bold').getByText("No trips found");
    }

    async clickOnLuxTab() {
        await this.lux_tab.click();
    }

    async clickOnLuxItem() {
        await this.lux_image.click();
    }
}