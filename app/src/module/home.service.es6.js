'use strict';
import mod from './_module.es6';

class HomeService {
    constructor($http) {
        this.services ={
            http: $http
        }
    }

    add(collection, feedback){
        var url = '/feedback/' + collection;
        return this.services.http.post(url, feedback, {timeout: 2000});
    }
}
HomeService.$inject=['$http'];

mod.service('HomeService', HomeService);