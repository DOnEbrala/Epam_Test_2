const condition = require('../../pom/firstTask');
const check = require('../../pom/firstTaskCheck')

describe("Test suite", () => {

    it("Hurt Me Plenty", async () => {
        await browser.url('https://cloud.google.com/');
        await condition.GoogleSearchInput.setValue("Google Cloud Platform Pricing Calculator" + "\uE007");
        await condition.GoogleCalculatorPage.click();
        await expect(browser).toHaveTitleContaining("Google Cloud Pricing Calculator");

        await condition.goToCalculatorFrame();
        await condition.CalculatorInputs();
    });

    it("Hurt Me Plenty Check", async () => {
        await check.CheckCondition();
        await browser.switchToParentFrame();
    })

});