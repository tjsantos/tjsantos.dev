import { expect, test } from '@playwright/test'

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

// TODO a11y tests
