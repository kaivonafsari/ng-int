angular.module('app.templates', ['home.template.html']);

angular.module("home.template.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("home.template.html",
    "<h1>{{home.message()}}</h1>\n" +
    "\n" +
    "<img ng-src='{{home.rawImage}}' />\n" +
    "");
}]);
