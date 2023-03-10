const Page = require('./page');

class CheckPage extends Page {
    get resultBlock(){
        return $('//md-card-content[@class = "flex-sm-100 flex-gt-sm-40"]')
    }
    async checkCondition(){
        await this.resultBlock.waitForExist(2000);
        await expect(this.resultBlock).toHaveTextContaining("Compute Engine");
        await expect(this.resultBlock).toHaveTextContaining("Region: Frankfurt")
        await expect(this.resultBlock).toHaveTextContaining("Commitment term: 1 Year")
        await expect(this.resultBlock).toHaveTextContaining("Provisioning model: Regular")
        await expect(this.resultBlock).toHaveTextContaining("Instance type: n1-standard-8")
        await expect(this.resultBlock).toHaveTextContaining("Operating System / Software: Free")
        await expect(this.resultBlock).toHaveTextContaining("Local SSD: 2x375 GiB")

    }


}



module.exports= new CheckPage();