const express = require ('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express(),
    binanceRouter = require('./routes/binanceRoute'),
    port = process.env.PORT || 3000;
    
class App {
    constructor(){
        this.initRoutes();
        this.start();
    }

    start(){
        app.listen(port, (err) => {
            console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
        });
    }

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

    initRoutes(){
        app.use('/binance', binanceRouter);
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


//TODO ammend vanila js to es5 format.
//TODO understand the use of reposiroty directory on top of controller.