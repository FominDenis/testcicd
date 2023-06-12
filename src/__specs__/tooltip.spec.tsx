import { test, expect } from '@playwright/experimental-ct-react';
import Tooltip from '../components/Tooltip/Tooltip';

test.describe('Tooltip component', () => {
    const tooltipContent = 'Tooltip component';

    test('displays content on hover', async ({ mount }) => {
        const tooltip = await mount(<Tooltip content="Tooltip component">
            <button>Hover over me</button>
        </Tooltip>);
        const button = await tooltip.locator('button');

        await button.hover();
        await expect(tooltip).toContainText(tooltipContent);
    });
});