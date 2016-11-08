(function () {
    'use strict'
    var express = require('express');
    var proxy = require('express-http-proxy')
    var colors = require('colors');
    
    var CONFIG = {
        PORT: process.env.PORT || 9001
    }

    var app = express();
    app.use(express.static('.'));    
    
    app.listen(CONFIG.PORT, function() {
        console.log(colors.green('Apllication started on port ' + CONFIG.PORT)) 
    });
    
})();

