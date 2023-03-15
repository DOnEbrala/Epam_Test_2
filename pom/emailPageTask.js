const Page = require('./page');
// const ConditionPage = require('./condition');

class EmailPage extends Page {
    
    get newMailAdressInput () {
        return $('//div[@id="email_id"]');
       }
      get copyButton (){
        return $('//div[@id = "btn_copy"]');
      }
      get firstFrame() {
        return $('#cloud-site  iframe');
      }
      get secondFrame() {
          return $('#myFrame');
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
      get adCommercialCloseButton(){
        return $('//div[@id="cookie_close"]');
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
      
    async emailPageTasks(){
        const currentWindowHandle = await browser.getWindowHandle();
  
        await browser.newWindow('https://etempmail.net/10minutemail');
        await this.copyButton.click();
        const newWindowHandle = await browser.getWindowHandle();
  
        await browser.switchToWindow(currentWindowHandle);
  
        await this.firstFrame.waitForDisplayed(3000);
        await browser.switchToFrame(await this.firstFrame);
        await this.secondFrame.waitForDisplayed(3000);
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
        
        await this.adCommercialCloseButton.waitForDisplayed(2000);
        await this.adCommercialCloseButton.click();
        await browser.pause(5000);
        await this.newWindowMailInbox.waitForDisplayed(10000);
        await this.newWindowMailInbox.click();
  
        await this.googleMailFrame.waitForDisplayed(3000);
        await browser.switchToFrame(await this.googleMailFrame);
  
        await this.mailMessage.waitForDisplayed(3000);
        await expect(this.mailMessage).toHaveTextContaining("USD 1,081.20");
        
       }


}


module.exports = new EmailPage(); 