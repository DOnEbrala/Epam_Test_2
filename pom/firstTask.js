const Page = require('./page');


class Condition extends Page {
    get GoogleSearchInput(){
        return $('//input[@class = "devsite-search-field devsite-search-query"]')
    }
    get GoogleCalculatorPage(){
        return $('//a[@data-ctorig = "https://cloud.google.com/products/calculator"]')
    }
    get GoogleCalculatorPageTitle(){
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
    get FirstNumberInput(){
      return $('#input_92')
    }
    get SeriesDropDownMenuLabel(){
      return $('#select_value_label_87')
    }
    get SeriesDropDownMenuOption(){
      return $('//div[contains (text(), "N1")]');
    }
    get ComputerOptionDropDownMenu(){
      return $('#select_value_label_88');
    }
    get ComputerOptionDropDownMenuOption(){
      return $('//div[contains (text(), "n1-standard-8 (vCPUs: 8, RAM: 30GB")]')
    }
    get CheckBoxGpu(){
      return $('//div[contains (text(), "Add GPUs.")][1]')
    }
    get GpuSelectDropDown(){
      return $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[14]/div/div[1]/div[1]/md-input-container[1]')
      
    }
    get GpuSelectDropDownOption(){
      return $('//div[contains (text(), "NVIDIA Tesla V100")][1]')
    }
    get GpuNumberDropDownMenu(){
      return $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[14]/div/div[1]/div[1]/md-input-container[2]')
    }
    get GpuNumberDropDownMenuOption(){
      return $('/html/body/div[6]/md-select-menu/md-content/md-option[2]/div')
    }
    get SsdNodesContainerDropDown(){
      return $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[15]/div[1]/md-input-container')
    }
    get SsdNodesContainerDropDownOption(){
      return $('//div[contains(text(), "2x375 GB")]')
    }
    get LocationServerDropDown(){
      return $('/html/body/md-content/md-card/div/md-card-content[1]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[16]/div[1]/md-input-container')
    }
    get LocationServerDropDownOption(){
      return $('//*[@id="select_option_230"]')
    }
    get CommittedUsageTimeDropDown(){
      return $('//*[@id="select_132"]')
    }
    get CommittedUsageTimeDropDownOption(){
      return $('//*[@id="select_option_130"]/div[1]')
    }
    get EstimateButton(){
      return $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[20]/button')
    }

    async CalculatorInputs(){
      await this.FirstNumberInput.click()
      await this.FirstNumberInput.setValue(4);
      
      await this.SeriesDropDownMenuLabel.click()
      await this.SeriesDropDownMenuOption.click()
      
      await this.ComputerOptionDropDownMenu.click();
      await this.ComputerOptionDropDownMenuOption.waitForExist(2000);
      await this.ComputerOptionDropDownMenuOption.click();

      await this.CheckBoxGpu.click();
      await this.GpuSelectDropDown.waitForDisplayed(2000);
      await this.GpuNumberDropDownMenu.waitForDisplayed(2000);

      await this.GpuSelectDropDown.click();
      await this.GpuSelectDropDownOption.waitForDisplayed(2000);
      await this.GpuSelectDropDownOption.click();

      await this.GpuNumberDropDownMenu.click();
      await this.GpuNumberDropDownMenuOption.waitForDisplayed(2000);
      await this.GpuNumberDropDownMenuOption.click();

      await this.SsdNodesContainerDropDown.click();
      await this.SsdNodesContainerDropDownOption.waitForDisplayed(2000);
      await this.SsdNodesContainerDropDownOption.click();

      await this.LocationServerDropDown.click();
      await this.LocationServerDropDownOption.waitForDisplayed(2000);
      await this.LocationServerDropDownOption.click();

      await this.CommittedUsageTimeDropDown.click();
      await this.CommittedUsageTimeDropDownOption.waitForDisplayed(2000);
      await this.CommittedUsageTimeDropDownOption.click();

      // await this.EstimateButton.scrollIntoView();
      await this.EstimateButton.click();




    }
}



module.exports= new Condition();