const http = require('http'),
    request = require('request'),
    url = require('url'),
    queryString = require('query-string'),
    binanceDefaultAddress = 'https://www.binance.com/api/v1/depth?symbol=BNBBTC&limit=1000';


class BinanceRepository {
    
    //route the data to the search coin
    getUrlData(coin){

        var parsedUrl = url.parse(binanceDefaultAddress, true);
        parsedUrl.query.symbol = coin + 'BTC';
        delete parsedUrl.search;

        return url.format(parsedUrl);
    }

    // get data
    getData(req, callback){ 

            console.log("nangiinis ka ba?");
            console.log(req.params.coin);
            let coin = req.params.coin + 'BTC';
            var parsedUrl = url.parse(binanceDefaultAddress, true);
            console.log("This is binance URL");
            let options = {
               url : 'https://www.binance.com/api/v1/depth?symbol=' + coin +'&limit=1000',
               // url : binanceDefaultAddress.href,
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

module.exports = new BinanceRepository();
