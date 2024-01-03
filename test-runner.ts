// test-runner.ts
import { test } from '@playwright/test';
import { DetailsBoxPage } from './pages/DetailsBoxPage';
import { LoginPage } from './pages/LoginPage';

test('Login and Run Tests', async ({ page }) => {
  
    // Perform login here
    const Details: DetailsBoxPage = new DetailsBoxPage(page);
    await Details.goToPage();
    await Details.clickOnLoginIcon();

    const Login: LoginPage = new LoginPage(page);
    await Login.enterUsername();
    await Login.enterPassword();
    await Login.clickOnContinueButton();

    // Run individual test files
    await runTabTests(page);

    // Perform logout here
    await Details.clickOnProfileIcon();
    await Details.clickOnLogoutOption();
});

async function runTabTests(page: any) {
  // Specify the order of test files
  const testFiles = [
    'arctic.spec.ts',
    'barns.spec.ts'
  ];

  for (const testFile of testFiles) {
    console.log(`Running ${testFile}`);
    await import(`./${testFile}`).then((module) => module.runTests(page));
  }
}