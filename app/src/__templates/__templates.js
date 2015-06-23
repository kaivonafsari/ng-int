angular.module('app.templates', ['home.template.html']);

angular.module("home.template.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("home.template.html",
    "<h1>{{home.message()}}</h1>\n" +
    "\n" +
    "<div class=\"text-center\">\n" +
    "    <h1>The shortest path between node <code>0</code> and <code>3</code></h1>\n" +
    "    <img ng-src='{{home.rawImage}}' style=\"width: 800px\"/>\n" +
    "\n" +
    "    <h3>is <code>{{home.shortestPath}}</code> with a length of <code>{{home.shortestPathDistance}}</code></h3>\n" +
    "\n" +
    "    <p>This should give you an idea of how to use Dijkstra's. Best of luck!</p>\n" +
    "</div>");
}]);
