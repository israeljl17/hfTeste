//var app = angular.module("hashTagWorkApp", ['ui.router', 'ngStorage', 'ngMap', 'ui.mask']);
var app = angular.module("hfTesteApp", ['angularUtils.directives.dirPagination', 'ngRoute', 'ngStorage']);

app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    //$locationProvider.hashPrefix('');

    $routeProvider
        .when('/produtos', {
            templateUrl: '/produtos',
            controller: 'ProdutoCtrl',
            autorize: true
        })
        .when('/produtos/adicionar', {
            templateUrl: '/produtos/cadastrar',
            controller: 'ProdutoCtrl',
            autorize: true
        })
        .when('/produtos/editar/:id', {
            templateUrl: '/produtos/editar',
            controller: 'ProdutoCtrl',
            autorize: true
        })
        .when('/produtos/consultar/:id', {
            templateUrl: '/produtos/consultar',
            controller: 'ProdutoCtrl',
            autorize: true
        })
        .when('/usuarios/cadastrar', {
            templateUrl: '/usuarios/cadastrar',
            controller: 'UsuarioCtrl'
        })
        .when('/usuarios/login', {
            templateUrl: '/usuarios/login',
            controller: 'UsuarioCtrl'
        })
        .when('/usuarios/refresh', {
            templateUrl: '/usuarios/refresh',
            controller: 'UsuarioCtrl'
        })
        .otherwise({
            redirectTo: '/produtos'
        });
});
