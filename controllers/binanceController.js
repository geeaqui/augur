/*
const http = require('http'),
    request = require('request');
*/
const binanceRepo = require('../lib/binanceRepository');

class BinanceController{
    
    constructor(router){
        router.get('/data', this.getData.bind(this));
    }
    
    getData(req, res){
        binanceRepo.getData((err, data) => {
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
module.exports = BinanceController;

