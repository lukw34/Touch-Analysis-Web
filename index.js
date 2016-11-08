(function () {
    'use strict'
    var express = require('express');
    var proxy = require('express-http-proxy')
    var colors = require('colors');
    
    var CONFIG = {
        PORT: process.env.PORT || 9002
    }

    var app = express();
    app.use(express.static('.'));    

    app.use('/api', proxy('http://139.59.213.12:81'))
    
    app.listen(CONFIG.PORT, function() {
        console.log(colors.green('Apllication started on port ' + CONFIG.PORT)) 
    });
    
})();

