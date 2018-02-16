const express = require ('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    
    binanceRouter = require('./routes/binanceRoute'),
    router = require('./routes/dynamicRouter'),
    app = express(),
    port = process.env.PORT || 3000;
    
class App {
    constructor(){
        this.initRoutes();
        //this.initViewEngine();
        this.start();
    }

    start(){
        app.listen(port, (err) => {
            console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
        });
    }

    /*
    //might not be using this in the future
    initViewEngine() {
        const hbs = exphbs.create({
            extname: '.hbs',
            defaultLayout: 'master'
        });
        app.engine('hbs', hbs.engine);
        app.set('view engine', 'hbs');
        hbsLayouts.register(hbs.handlebars, {});
    }
*/
    initRoutes(){
        //dynamic way of using routes
        router.load(app, './controllers');

        // redirect all others to the index (HTML5 history)
        
        /*
        //currently not in use
        app.all('/*', (req, res) => {
            res.sendFile(__dirname + '/public/index.html');
        });
        */
        

        //app.use('/binance', binanceRouter); traditional of using router
    }
}

/*
//old way of using the router and connecting to the server
app.use('/binance', binanceRouter);

app.listen(port, (err) => {
        console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
});
*/
let myApp = new App();