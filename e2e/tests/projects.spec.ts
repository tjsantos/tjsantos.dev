import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/TJ/);
});

const projects = [
    'testimonial-card',
    'blog-card',
    'profile-card'
]

test('main page should link to all projects', async ({page}) => {
    await page.goto('/')

    // TODO prettier, eslint, tsconfig
    const links =
        await page.locator('a')
            .evaluateAll<Array<string>, HTMLAnchorElement>((selected) => selected.map((a) => a.href))

    projects.forEach((projectName) => {
        expect(links.some((link) => link.endsWith(projectName))).toBe(true)
    })
})