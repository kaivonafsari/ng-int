'use strict';
import 'lodash';
import 'angular';
import mod from './_module.es6';

function Factory() {
    return {
        restrict: 'E',
        scope: {
            something: '='
        },
        link: function(scope, elem, attr) {
            scope.elem = elem;
            scope.attr = attr;
            scope.services = {
            };
            _create.call(scope);
        }
    }
}

function Directive() {}

function _create() {
    _.extend(this, Directive.prototype);
    _init.call(this);
}

function _init() {
}

Directive.prototype.example = ()=> {};

Factory.$inject = [];
mod.directive('some', Factory);



