const Page = require('./page');


class ConditionPage extends Page {
    get googleSearchInput(){
        return $('//input[@class = "devsite-search-field devsite-search-query"]');
    }
    get googleCalculatorPage(){
        return $('//a[@data-ctorig = "https://cloud.google.com/products/calculator"]');
    }
    get googleCalculatorPageTitle(){
        return $('//h2["Google Cloud Pricing Calculator"]');
    }
    get firstFrame() {
        return $('#cloud-site  iframe');
    }
    get secondFrame() {
        return $('#myFrame');
    }
    async goToCalculatorFrame() {
        await this.firstFrame.waitForDisplayed();
        await browser.switchToFrame(await this.firstFrame);
        await this.secondFrame.waitForDisplayed();
        await browser.switchToFrame(await this.secondFrame);
    }  
    get firstNumberInput(){
      return $('#input_92');
    }
    get seriesDropDownMenuLabel(){
      return $('#select_value_label_87');
    }
    get seriesDropDownMenuOption(){
      return $('//div[contains (text(), "N1")]');
    }
    get computerOptionDropDownMenu(){
      return $('#select_value_label_88');
    }
    get computerOptionDropDownMenuOption(){
      return $('//div[contains (text(), "n1-standard-8 (vCPUs: 8, RAM: 30GB")]');
    }
    get checkBoxGpu(){
      return $(`//md-checkbox[@ng-disabled = "!listingCtrl.isGpuOptionAvailable('computeServer')"]`);
    }
    get gpuSelectDropDown(){
      return $('//md-select[@placeholder ="GPU type"]');
    }
    get gpuSelectDropDownOption(){
      return $('//div[contains (text(), "NVIDIA Tesla V100")]');
    }
    get gpuNumberDropDownMenu(){
      return $('//md-select[@placeholder = "Number of GPUs"]');
    }
    get gpuNumberDropDownMenuOption(){
      return $('//md-option[@ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"][@value = "1"]');
    }
    get ssdNodesContainerDropDown(){
      return $('//md-select[@ng-model = "listingCtrl.computeServer.ssd"]');
    }
    get ssdNodesContainerDropDownOption(){
      return $('//div[contains(text(), "2x375 GB")]');
    }
    get locationServerDropDown(){
      return $('//md-select[@ng-model = "listingCtrl.computeServer.location"]');
    }
    get locationServerDropDownOption(){
      return $('//md-option[@id="select_option_230"]');
    }
    get committedUsageTimeDropDown(){
      return $('//md-select[@id="select_132"]');
    }
    get committedUsageTimeDropDownOption(){
      return $('//md-option[@id = "select_option_130"]');
    }
    get estimateButton(){
      return $('//button[@ng-click="listingCtrl.addComputeServer(ComputeEngineForm);"]');
    }

    async calculatorInputs(){
      await this.firstNumberInput.click();
      await this.firstNumberInput.setValue(4);
      
      await this.seriesDropDownMenuLabel.click();
      await this.seriesDropDownMenuOption.waitForDisplayed(2000);
      await this.seriesDropDownMenuOption.click();
      
      await this.computerOptionDropDownMenu.click();
      await this.computerOptionDropDownMenuOption.waitForExist(2000);
      await this.computerOptionDropDownMenuOption.click();

      await this.checkBoxGpu.click();
      await this.gpuSelectDropDown.waitForDisplayed(2000);
      await this.gpuNumberDropDownMenu.waitForDisplayed(2000);

      await this.gpuSelectDropDown.click();
      await this.gpuSelectDropDownOption.waitForDisplayed(2000);
      await this.gpuSelectDropDownOption.click();

      await this.gpuNumberDropDownMenu.click();
      await this.gpuNumberDropDownMenuOption.waitForDisplayed(2000);
      await this.gpuNumberDropDownMenuOption.click();

      await this.ssdNodesContainerDropDown.click();
      await this.ssdNodesContainerDropDownOption.waitForDisplayed(2000);
      await this.ssdNodesContainerDropDownOption.click();

      await this.locationServerDropDown.click();
      await this.locationServerDropDownOption.waitForDisplayed(2000);
      await this.locationServerDropDownOption.click();

      await this.committedUsageTimeDropDown.click();
      await this.committedUsageTimeDropDownOption.waitForDisplayed(2000);
      await this.committedUsageTimeDropDownOption.click();

      await this.estimateButton.click();

    }

    get newMailAdressInput () {
      return $('//div[@id="email_id"]');
     }
    get copyButton (){
      return $('//div[@id = "btn_copy"]');
    }
    get emailButton(){
      return $('//button[@id = "Email Estimate"]');
    }
    get formWindow(){
      return $('body div.md-dialog-container.ng-scope');
    }
    get emailInput(){
      return $('//input[@ng-model = "emailQuote.user.email"]');
    }
    get emailSubmit(){
      return $('//button[contains (text() , "Send Email")]');
    }
    get newWindowMailInbox(){
      return $('//div[contains (text(), "gcp-estimate@cloudpricingcalculator.appspotmail.com")]');
    }
    get mailMessage(){
      return $('//table[@class="quote"]');
    }
    get googleMailFrame(){
      return $('//iframe[@class = "w-full flex flex-grow min-h-tm-groot-iframe"]');
    }
   
    async secondTasks(){
      const currentWindowHandle = await browser.getWindowHandle();

      await browser.newWindow('https://etempmail.net/10minutemail');
      await this.copyButton.click();
      const newWindowHandle = await browser.getWindowHandle();

      await browser.switchToWindow(currentWindowHandle);

      await this.firstFrame.waitForDisplayed();
      await browser.switchToFrame(await this.firstFrame);
      await this.secondFrame.waitForDisplayed();
      await browser.switchToFrame(await this.secondFrame);

      await this.emailButton.waitForExist(2000);
      await this.emailButton.click();
      await this.formWindow.waitForDisplayed(2000);
      await this.emailInput.waitForExist(2000);
      await this.emailInput.setValue("");
      await browser.keys(["\uE009","v"]);
      await this.emailSubmit.waitForDisplayed(2000);
      await this.emailSubmit.click();

      await browser.switchToWindow(newWindowHandle);

      await this.newWindowMailInbox.waitForDisplayed(10000);
      await this.newWindowMailInbox.click();

      await this.googleMailFrame.waitForDisplayed(3000);
      await browser.switchToFrame(await this.googleMailFrame);

      await this.mailMessage.waitForDisplayed(3000);
      await expect(this.mailMessage).toHaveTextContaining("USD 1,081.20");
      
     }
     
}



module.exports = new ConditionPage();