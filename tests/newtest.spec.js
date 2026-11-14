import {test, expect} from '@playwright/test'

test ('hidden option', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('[id="displayed-text"]').fill('hi da')
    await page.locator('[id="hide-textbox"]').click()

    await expect(page.locator('[id="displayed-text"]')).toBeHidden()
    await page.pause()
})