'use strict';
import 'lodash';
import mod from './_module.es6';
import Dijkstras from 'Dijkstras';

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
    this.rawImage = 'content/images/toyGraph.jpg';


    var graph = {
        0: {edges: {1: 1, 2: 4}},
        1: {edges: {2: 2, 3: 6}},
        2: {edges: {3: 3}},
        3: {edges: {}}
    };
    var dijkstras = new Dijkstras(graph);
    var result = dijkstras.calc(0,3);

    this.shortestPathDistance = result[0];
    this.shortestPath = result[1];
}

Controller.$inject = ['$scope', '$state'];
mod.controller('HomeController', Controller);
