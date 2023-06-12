import {test, expect} from "@playwright/experimental-ct-react";
import Button from "../components/Button/Button.tsx";

test.describe('Button component', () => {
    test('button content', async ({mount}) => {
        const buttonComponent = await mount(<Button
            color='red'
            id='btn'
            children='My Button'/>);
        await expect(buttonComponent).toContainText('My Button');
    });
});