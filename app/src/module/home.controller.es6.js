'use strict';
import 'lodash';
import mod from './_module.es6';

class Controller {
    constructor($scope, $state) {
        this.services = {
            state: $state
        };

        _init.call(this);
    }

    message() {
        return this.rawMessage;
    }
}


function _init() {
    this.rawMessage = 'Welcome to your Lumiata Interview';
    this.rawImage = 'content/images/dude.gif'
}

Controller.$inject = ['$scope', '$state'];
mod.controller('HomeController', Controller);
