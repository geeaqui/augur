const marketRepo = require('../lib/marketRepository');

class MarketController{
    
    constructor(router){
        router.get('/marketprice', this.getData.bind(this));
    }
    
    getData(req, res){
        
        console.log("getting the price");

        marketRepo.getData( (err, data) => {
            if(err){
                console.log(err);
                return res.status(500).json(err);
            }else{
                console.log('*** data is ok, ready to initialize!');
                res.json(data.resp);
            }
        });
    }
}
module.exports = MarketController;