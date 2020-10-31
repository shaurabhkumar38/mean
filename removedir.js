<!DOCTYPE html>
<html lang="en">
<head>
<script>
var app = angular.module('myApp',['ngRoute'])
app.config(function($routeProvider){
$routeProvider
.when('/',{
templateUrl:'index.html'
})
.when('/About',{
templateUrl:'about.html'
})
.otherwise({
redirectTo:''
})
});
var app.controller('home', function($scope){
$scope.blog = [
'Demo 1',
'Demo 2',
'Demo 3',
'Demo 4',
'Demo 5',
'Demo 6'
]
})
</script>
</head>
<body ng-app="myApp">
<div ng-view></div>
</body>
</html>

https://www.youtube.com/watch?v=MJncyf_veEY