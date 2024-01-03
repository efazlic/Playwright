import { test, expect } from '@playwright/test';
import { DetailsBoxPage } from '../pages/DetailsBoxPage.ts';
import { commonSetup } from './commonSetup.ts';

test('test the confirmation dialog', async ({ page }) => {

    const DetailsBox: DetailsBoxPage = new DetailsBoxPage(page);
    
    await commonSetup(page);

    const logo_image = await DetailsBox.logo_image.isVisible();
    expect(logo_image).toBe(true);
    
});