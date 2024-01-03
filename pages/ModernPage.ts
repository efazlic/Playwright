export class ModernPage {
    private page: any;
    private modern_tab: any;
    private modern_image: any;
    public modern_item_title: any;
    public no_trips_found_text: any;

    constructor(page: any) {
        this.page = page;
        this.modern_tab = page.locator('div.font-medium.text-sm').getByText("Modern");
        this.modern_image = page.locator('div.font-semibold.text-lg').getByText("Americas, Honduras");
        this.modern_item_title = page.locator('div.text-2xl.font-bold').getByText("New York Central Park Apartment");
        this.no_trips_found_text = page.locator('div.text-2xl.font-bold').getByText("No trips found");
    }

    async clickOnModernTab() {
        await this.modern_tab.click();
    }

    async clickOnModernItem() {
        await this.modern_image.click();
    }
}