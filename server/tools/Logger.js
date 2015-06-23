'use strict';

function Logger(options) {
    this.service = options.service || '';
}

/**
 * Logs arguments to the console
 */

// simple print without a timestamp
Logger.prototype.print = function() {
    console.log.apply(console, arguments);
};

// timestamped print
Logger.prototype.log = function() {
    var args = Array.prototype.slice.apply(arguments);
    args.unshift(_stampTime() + _stampService.call(this));
    console.log.apply(null, args);
};

Logger.prototype.debug = function() {
    if (process.env.ENV == 'development') {
        console.log.apply(null, arguments);
    }
};

// logs '------------------------'
Logger.prototype.break = function() {
    console.log.call(null, '-----------------------------');
};

Logger.prototype.error = function(e, message) {
    this.log('@' + this.service);
    this.print('  ↳', e.stack);
};

function _stampTime() {
    var currentdate = new Date();
    var datetime = '[ '
        + (currentdate.getMonth()+1) + '/'
        + currentdate.getDate() + '/'
        + currentdate.getFullYear() + ' @ '
        + currentdate.getHours() + ':'
        + currentdate.getMinutes() + ':'
        + currentdate.getSeconds()
        + ' ]';

    return datetime;
}

function _stampService() {
    return this.service ? '❲'+ this.service +'❳' : '';
}

module.exports = Logger;