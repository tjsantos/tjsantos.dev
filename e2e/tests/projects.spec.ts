import { expect, test } from '@playwright/test'
import { argosScreenshot } from '@argos-ci/playwright'

test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/TJ/)
})

const projects = ['testimonial-card', 'blog-card', 'profile-card']

test('main page should link to all projects', async ({ page }) => {
  await page.goto('/')

  const assertions = projects.map((projectName) => {
    return expect(page.locator(`a[href*="${projectName}"]`)).toBeVisible()
  })
  await Promise.all(assertions)
})

for (const project of projects) {
  test(`screenshot ${project}`, async ({ page }) => {
    await page.goto(`/${project}`)
    await argosScreenshot(page, project, {
      viewports: [
        'iphone-x', // Mobile 375x812
        'ipad-mini', // Tablet 768x1024
        { width: 1440, height: 768 }, // Desktop 1440x768
      ],
    })
  })
}

test('screenshot homepage', async ({ page }) => {
  await page.goto('/')
  await argosScreenshot(page, 'homepage')
})

// TODO a11y tests

test('aria-busy is present then removed on render', async ({ page }) => {
  const response = await page.goto('/')
  expect(response).not.toBeNull()
  const html = (await response?.text()) ?? ''

  // could also use cheerio to ensure valid html
  expect(html).toContain(' aria-busy="true"')

  const busyElements = page.locator('[aria-busy="true"]')
  await expect(busyElements).toHaveCount(0)
})
