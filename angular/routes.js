mapp.config(['$routeProvider', function($routeProvider){
$routeProvider
.when('/',{
  templateUrl  : 'views/main.html',
  controller   : 'maincontroller',
  controllerAs : 'main'
})

.when('/Bdet/:id',{
  templateUrl : 'views/bookdetails.html',
  controller  : 'bookcontroller',
  controllerAs : 'bookdetails'

})

.when('/Hdet/:id',{
  templateUrl :'views/housedetails.html',
  controller : 'housecontroller',
  controllerAs : 'housedetails'
})

.when('/Cdet/:id',{
  templateUrl : 'views/chardetails.html',
  controller : 'charactercontroller',
  controllerAs : 'chardetails'
})

.otherwise({
  template : '<h1>Error 404 page not found</h1>'
});
}]);
