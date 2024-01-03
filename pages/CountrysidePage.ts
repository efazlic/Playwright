export class CountrysidePage {
    private page: any;
    private countryside_tab: any;
    private countryside_image: any;
    public countryside_item_title: any;
    public no_trips_found_text: any;

    constructor(page: any) {
        this.page = page;
        this.countryside_tab = page.locator('div.font-medium.text-sm').getByText("Countryside");
        this.countryside_image = page.locator('div.font-semibold.text-lg').getByText("Europe, Bosnia and Herzegovina");
        this.countryside_item_title = page.locator('div.text-2xl.font-bold').getByText("Lukomir village");
        this.no_trips_found_text = page.locator('div.text-2xl.font-bold').getByText("No trips found");
    }

    async clickOnCountrysideTab() {
        await this.countryside_tab.click();
    }

    async clickOnCountrysideItem() {
        await this.countryside_image.click();
    }
}