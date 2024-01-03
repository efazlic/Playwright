export class LoginPage {

    private page: any;
    private email: any;
    private password: any;
    private continueButton: any;

    constructor(page: any) {
        this.page = page;
        this.email = page.locator('input#email');
        this.password = page.locator('input#password');
        this.continueButton = page.locator('button').getByText("Continue").first();
    }

    async enterUsername() {
        await this.page.waitForTimeout(3000);
        await this.email.fill('edin.fazlic@endava.com');
        await this.page.waitForTimeout(3000);
    }

    async enterPassword() {
        await this.page.waitForTimeout(3000);
        await this.password.fill('test123');
        await this.page.waitForTimeout(3000);
    }

    async clickOnContinueButton() {
        await this.page.waitForTimeout(3000);
        await this.continueButton.click();
        await this.page.waitForTimeout(3000);
    }
}