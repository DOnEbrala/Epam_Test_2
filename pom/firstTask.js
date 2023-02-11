const Page = require('./page');


class ConditionPage extends Page {
    get googleSearchInput(){
        return $('//input[@class = "devsite-search-field devsite-search-query"]')
    }
    get googleCalculatorPage(){
        return $('//a[@data-ctorig = "https://cloud.google.com/products/calculator"]')
    }
    get googleCalculatorPageTitle(){
        return $('//h2["Google Cloud Pricing Calculator"]');
    }
    get firstFrame() {
        return $('#cloud-site > devsite-iframe > iframe');
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
      return $('#input_92')
    }
    get seriesDropDownMenuLabel(){
      return $('#select_value_label_87')
    }
    get seriesDropDownMenuOption(){
      return $('//div[contains (text(), "N1")]');
    }
    get computerOptionDropDownMenu(){
      return $('#select_value_label_88');
    }
    get computerOptionDropDownMenuOption(){
      return $('//div[contains (text(), "n1-standard-8 (vCPUs: 8, RAM: 30GB")]')
    }
    get checkBoxGpu(){
      return $('//div[contains (text(), "Add GPUs.")][1]')
    }
    get gpuSelectDropDown(){
      return $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[14]/div/div[1]/div[1]/md-input-container[1]')
      
    }
    get gpuSelectDropDownOption(){
      return $('//div[contains (text(), "NVIDIA Tesla V100")][1]')
    }
    get gpuNumberDropDownMenu(){
      return $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[14]/div/div[1]/div[1]/md-input-container[2]')
    }
    get gpuNumberDropDownMenuOption(){
      return $('/html/body/div[6]/md-select-menu/md-content/md-option[2]/div')
    }
    get ssdNodesContainerDropDown(){
      return $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[15]/div[1]/md-input-container')
    }
    get ssdNodesContainerDropDownOption(){
      return $('//div[contains(text(), "2x375 GB")]')
    }
    get locationServerDropDown(){
      return $('/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[16]/div[1]/md-input-container')
    }
    get locationServerDropDownOption(){
      return $('//*[@id="select_option_230"]')
    }
    get committedUsageTimeDropDown(){
      return $('//*[@id="select_132"]')
    }
    get committedUsageTimeDropDownOption(){
      return $('//*[@id="select_option_130"]/div[1]')
    }
    get estimateButton(){
      return $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[20]/button')
    }

    async calculatorInputs(){
      await this.firstNumberInput.click()
      await this.firstNumberInput.setValue(4);
      
      await this.seriesDropDownMenuLabel.click()
      await this.seriesDropDownMenuOption.waitForDisplayed(2000)
      await this.seriesDropDownMenuOption.click()
      
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

      // await this.estimateButton.scrollIntoView();
      await this.estimateButton.click();

    }

    get newMailAdressInput () {
      return $('//div[@id="email_id"]')
     }
    get copyButton (){
      return $('//div[@id = "btn_copy"]')
    }
    get emailButton(){
      return $('/html/body/md-content/md-card/div/md-card-content[2]/md-card/md-card-content/div/div/div/div[3]/button[2]')
    }
    get formWindow(){
      return $('body > div.md-dialog-container.ng-scope')
    }
    get emailInput(){
      return $('//label[contains (text(), "Email")]/..//input')
    }
    get emailSubmit(){
      return $('//button[contains (text() , "Send Email")]')
    }
    get newWindowMailInbox(){
      return $('//div[contains (text(), "gcp-estimate@cloudpricingcalculator.appspotmail.com")]')
    }
    get mailMessage(){
      return $('//table[@class="quote"]');
    }
    get googleMailFrame(){
      return $('//iframe[@class = "w-full flex flex-grow min-h-tm-groot-iframe"]')
    }
   
    async secondTasks(){
      const currentWindowHandle = await browser.getWindowHandle();

      await browser.newWindow('https://etempmail.net/10minutemail', { windowName : "10minutemail", windowFeatures : 'width=1920,height=1080,resizable,scrollbars=yes,status=1' })
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
      await browser.keys(["\uE009","v"])
      await this.emailSubmit.waitForDisplayed(2000);
      await this.emailSubmit.click();

      await browser.switchToWindow(newWindowHandle);

      await this.newWindowMailInbox.waitForDisplayed(5000);
      await this.newWindowMailInbox.click();

      await this.googleMailFrame.waitForDisplayed(3000);
      await browser.switchToFrame(await this.googleMailFrame)

      await this.mailMessage.waitForDisplayed(3000);
      await expect(this.mailMessage).toHaveTextContaining("USD 1,081.20")
      
     }
}



module.exports= new ConditionPage();