import { test, expect } from '@playwright/experimental-ct-react';
import App from '../App.tsx';

test.describe('App component', () => {
    test('App with components', async ({ mount }) => {
        const appComponents = await mount(<App/>);
        const tooltip = await appComponents.locator('//div[@id="tooltip"]');
        await tooltip.hover();
        await expect(appComponents).toContainText('Hello, world!');
    });
});