const condition = require('../../pom/firstTask');


describe("Test suite", () => {

    it("Hurt Me Plenty", async () => {
        await browser.url('https://cloud.google.com/');
        await condition.GoogleSearchInput.setValue("Google Cloud Platform Pricing Calculator" + "\uE007");
        await condition.GoogleCalculatorPage.click();
        await expect(browser).toHaveTitleContaining("Google Cloud Pricing Calculator");

        const frame = await browser.findElement('xpath','//*[@id="cloud-site"]/devsite-iframe/iframe')
        // await expect(hello).toExist();
        await browser.switchToFrame(frame)

        await condition.ragaca.click();
        await condition.ragaca2.click();

        await condition.GoogleNumberOfInstancesInput.waitUntil(async function (){
            await condition.GoogleNumberOfInstancesInput.click()
            return await condition.GoogleNumberOfInstancesInput.setValue("hello");

        }, {timeout: 10000});
        // await condition.GoogleNumberOfInstancesInput.setValue("Hello");
        browser.switchToParentFrame();
    });

});