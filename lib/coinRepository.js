const http = require('http'),
    request = require('request'),
    url = require('url');


class CoinRepository {
    
    // get data
    getCoinData(req, callback){ 

            let coin = req.params.coin.toUpperCase() + 'BTC';
            
            let options = {
                url: 'https://api.binance.com/api/v1/ticker/24hr?symbol=' + coin,
                method : 'GET',
                headers: {
                    'Accept' : 'application/json',
                    'Accept-Charset' : 'utf-8'
                }
            }
    
            request(options, (err, response, body) => {
                if(err){
                    console.log(err);
                    return res.status(500).json(err);
                }
    
                var json = JSON.parse(body);

                // set first arg to null to prevent logging to console the response and set the response to object to make it easier to invoke.
                callback(null, {
                    resp : json,
                });
            })
        
    }
}

module.exports = new CoinRepository();
