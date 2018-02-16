const http = require('http'),
    request = require('request');

class BinanceRepository {
    
    // get data
    getData(callback){
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

                // set first arg to null to prevent logging to console the response and set the response to object to make it easier to invoke.
                callback(null, {
                    resp : json
                });
            })
        
    }
}

module.exports = new BinanceRepository();