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
    get GoogleNumberOfInstancesInput(){
        // return $('//div[@class = "layout-row"]/..//input[@class="md-input ng-valid-min ng-touched ng-dirty ng-valid-number ng-not-empty ng-valid ng-valid-required"]')
        // return $('//input[@id="input_91"]');
        // return $('//input[@ng-model = "listingCtrl.computeServer.quantity"]')
        return $(`//input[@type="number"]/../label[contains(text(), "Number of instances")]`)
    }
    get ragaca(){
        return $('//h2[@class="md-flex"]')
        // return $('//md-select-value[@id ="select_value_label_87"]')
    }



}



module.exports= new Condition();