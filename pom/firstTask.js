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

    get FrameNeedToBeSwitched(){
        return $('xpath','//*[@id="myFrame"]'); 
    }
    get OurConditionFrame(){
        return $('//iframe[@name = "goog_1300384512"]');
    }
    get GoogleNumberOfInstancesInput(){
        return $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[1]/div[1]/md-input-container');
    }
    get ragaca(){
        return $('//*[@id="select_value_label_86"]');
        // return $('//md-select-value[@id ="select_value_label_87"]')
    }
    get ragaca2(){
        return $('//md-option[@id = "select_option_113"]')
        // return $('//div[contains (text(), "Compute-optimized")]');
    }



}



module.exports= new Condition();