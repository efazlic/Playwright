export class BeachPage {
    private page: any;
    private beach_tab: any;
    private beach_image: any;
    public beach_host_title: any;
    public no_trips_found_text: any;

    constructor(page: any) {
        this.page = page;
        this.beach_tab = page.locator('div.font-medium.text-sm').getByText("Beach");
        this.beach_image = page.locator('div.font-semibold.text-lg').getByText("Europe, Croatia").first();
        this.beach_host_title = page.locator('div.text-2xl.font-bold').getByText("Lajla");
        this.no_trips_found_text = page.locator('div.text-2xl.font-bold').getByText("No trips found");
    }

    async clickOnBeachTab() {
        await this.beach_tab.click();
    }

    async clickOnBeachItem() {
        await this.beach_image.click();
    }
}