export class DetailsBoxPage {

    private page: any;
    private ok_button: any;
    public logo_image: any;
    public login_icon: any;
    public profile_icon: any;
    public logout_option: any;

    constructor(page: any) {
        this.page = page;
        this.ok_button = page.locator('button:has-text("OK")');
        this.logo_image = page.locator('div.flex.flex-row.items-center.justify-between').first();
        this.login_icon = page.locator('div.flex.flex-row.items-center.justify-between.gap-3').getByText("Airbnb your home");
        this.profile_icon = page.locator('img.rounded-full').first();
        this.logout_option = page.locator('div.px-4.py-3.hover\\:bg-neutral-100.transition.font-semibold').getByText("Logout").first();
    }

    async goToPage() {
        await this.page.goto('https://test-automation-community.vercel.app/');
        await this.ok_button.click();
        await this.page.waitForTimeout(3000);
    }

    async clickOnLoginIcon() {
        await this.login_icon.click();
        await this.page.waitForTimeout(5000);
    }

    async clickOnProfileIcon() {
        await this.profile_icon.click();
    }

    async clickOnLogoutOption() {
        await this.logout_option.click();
        await this.page.waitForTimeout(5000);
    }
}