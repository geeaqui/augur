const express       = require ('express'),
    exphbs          = require('express-handlebars'),
    hbsLayouts      = require('handlebars-layouts'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    router          = require('./routes/dynamicRouter'),
    app             = express(),
    port            = process.env.PORT || 3000;
    
class App {
    constructor(){
        this.initExpressMiddleWare();
        this.initViewEngine();
        this.initRoutes();
        this.start();
    }

    start(){
        app.listen(port, (err) => {
            console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
        });
    }

    initExpressMiddleWare() {
        app.use(express.static(__dirname + '/public'));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
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
        //dynamic way of using routes
        router.load(app, './controllers');

        // redirect all others to the index (HTML5 history)

        app.all('/*', (req, res) => {
            res.sendFile(__dirname + '/public/index.html');
        });
        
        
    }
}

let myApp = new App();