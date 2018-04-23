const coinRepo = require('../lib/coinRepository');

class CoinController{
    
    constructor(router){
        router.get('/marketprice/:coin', this.getCoinData.bind(this));
    }
    
    getCoinData(req, res){

        coinRepo.getCoinData(req, (err, data) => {
            if(err){
                console.log(err);
                return res.status(500).json(err);
            }else{
                res.json(data.resp);
            }
        });
    }
}
module.exports = CoinController;