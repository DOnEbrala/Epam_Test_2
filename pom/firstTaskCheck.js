const Page = require('./page');

class Check extends Page {
    get ResultBlock(){
        return $('//md-card-content[@class = "flex-sm-100 flex-gt-sm-40"]')
    }
    async CheckCondition(){
        await this.ResultBlock.waitForExist(2000);
        await expect(this.ResultBlock).toHaveTextContaining("Compute Engine");
        await expect(this.ResultBlock).toHaveTextContaining("Region: Frankfurt")
        await expect(this.ResultBlock).toHaveTextContaining("Commitment term: 1 Year")
        await expect(this.ResultBlock).toHaveTextContaining("Provisioning model: Regular")
        await expect(this.ResultBlock).toHaveTextContaining("Instance type: n1-standard-8")
        await expect(this.ResultBlock).toHaveTextContaining("Operating System / Software: Free")
        await expect(this.ResultBlock).toHaveTextContaining("Local SSD: 2x375 GiB")

    }


}



module.exports= new Check();