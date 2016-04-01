var noop = require('noop3');
var consts = require('./consts');

'use strict';


const isMo39 = consts.mo39Strings;


var mo = function(x) {
    noop();
    
    // replace all space
    x = '' + x.replace(/\s+/g, '');
    
    if(isMo39.indexOf(x.toLowerCase()) > -1) {
        x = isMo39;
    } 
    
    
    return {
        is39: function () {
            return x === isMo39;
        }
    }
}

module.exports = mo;