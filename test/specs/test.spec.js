const condition = require('../../pom/firstTask')

describe("Test suite", () => {

    it("Hurt Me Plenty", async () => {
        await browser.url("//cloud.google.com/")
        await condition.GoogleSearchInput.setValue("Google Cloud Platform Pricing Calculator" + "\uE007");
        await condition.GoogleCalculatorPage.click();
        await expect(browser).toHaveTitleContaining("Google Cloud Pricing Calculator");
        await condition.GoogleNumberOfInstancesInput.waitForExist({timeout: 20000});
        await condition.GoogleNumberOfInstancesInput.click();
        await condition.GoogleNumberOfInstancesInput.setValue("Hello");
    });

});