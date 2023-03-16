const googlePage = require('../../pom/googlePage');
const googleCheckPage = require('../../pom/googlePageCheck');
const emailPage = require('../../pom/emailPageTask');

describe("Test suite", () => {

    it("Hurt Me Plenty", async () => {
        await browser.url('https://cloud.google.com/');
        await googlePage.googleSearchInput.setValue("Google Cloud Platform Pricing Calculator" + "\uE007");
        await googlePage.googleCalculatorPage.click();
        await expect(browser).toHaveTitleContaining("Google Cloud Pricing Calculator");

        await googlePage.goToCalculatorFrame();
        await googlePage.calculatorInputs();

        await googleCheckPage.checkCondition();
    });
    
    it("Hardcore", async () => {

        await emailPage.emailPageTasks();
        await browser.switchToParentFrame();
    })

});