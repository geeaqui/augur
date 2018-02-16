const http = require('http'),
    request = require('request');


class BinanceController{
    
    constructor(router){
        //console.log(router);
        router.get('/data', this.getData.bind(this));
    }

    
    getData(req, res){
        console.log(req.paramas);
        let options = {
            url : 'https://www.binance.com/api/v1/depth?symbol=BNBBTC&limit=1000',
            method : 'GET',
            headers: {
                'Accept' : 'application/json',
                'Accept-Charset' : 'utf-8'
            }
        }

        request(options, function(err, response, body){
            if(err){
                console.log(err);
                return res.status(500).json(err);
            }

            var json = JSON.parse(body);
            res.json(json);
        })
    }
}
module.exports = BinanceController;
//Traditional way of doing Controller
/*
function getData(req, res){
    console.log(req.paramas);
    let options = {
        url : 'https://www.binance.com/api/v1/depth?symbol=BNBBTC&limit=1000',
        method : 'GET',
        headers: {
            'Accept' : 'application/json',
            'Accept-Charset' : 'utf-8'
        }
    }

    request(options, function(err, response, body){
        if(err){
            console.log(err);
            return res.status(500).json(err);
        }

        var json = JSON.parse(body);
        res.json(json);
        //console.log(body);
    })
}

module.exports = {
	getData : getData
}
*/
