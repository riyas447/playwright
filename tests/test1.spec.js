import {test, expect} from '@playwright/test'

test ('check box',  async({page}) =>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('[id="checkBoxOption1"]').check()
    await page.locator('[id="checkBoxOption2"]').uncheck()
    await page.locator('[id="checkBoxOption3"]').check()
    await page.pause()
}
)