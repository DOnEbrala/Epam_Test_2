const condition = require('../../pom/condition');
const check = require('../../pom/conditionCheck');

describe("Test suite", () => {

    it("Hurt Me Plenty", async () => {
        await browser.url('https://cloud.google.com/');
        await condition.googleSearchInput.setValue("Google Cloud Platform Pricing Calculator" + "\uE007");
        await condition.googleCalculatorPage.click();
        await expect(browser).toHaveTitleContaining("Google Cloud Pricing Calculator");

        await condition.goToCalculatorFrame();
        await condition.calculatorInputs();

        await check.checkCondition();
    });
    
    it("Hardcore", async () => {
        await condition.secondTasks()
        await browser.switchToParentFrame();
    })

});