const http = require('http'),
    request = require('request'),
    marketDefaultAddress = 'https://api.coinmarketcap.com/v1/ticker/?limit=300';


class MarketRepository{
    getData(callback){ 
        
        let options = {
           url : marketDefaultAddress,
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

module.exports = new MarketRepository();