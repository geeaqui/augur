const http = require('http'),
    request = require('request'),
    url = require('url'),
    queryString = require('query-string'),
    binanceApiAddress = 'https://www.binance.com/api/v1/depth?symbol=BNBBTC&limit=1000';


class BinanceRepository {
    
    // get data
    getData(callback){ 
            let buy = callback.buy;
            let sell = callback.sell;
            let binanceURL = url.parse(binanceApiAddress, true);
            let parsed = queryString.parse(binanceURL.search);

            parsed.symbol = 'SUBBTC'

            let stringified = queryString.stringify(parsed);
            binanceURL.search = stringified;
            console.log(binanceURL.search);
            console.log(parsed);

            console.log("nangiinis ka ba?");
            console.log(binanceURL.query);
            console.log(binanceURL.href);
            console.log("This is binance URL");
            console.log(binanceURL);
            let options = {
               // url : 'https://www.binance.com/api/v1/depth?symbol=BNBBTC&limit=1000',
                url : binanceURL.href,
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
                    bNance: binanceApiAddress
                });
            })
        
    }
}

module.exports = new BinanceRepository();

investigated further with query string https://www.npmjs.com/package/query-string