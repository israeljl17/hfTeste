//var app = angular.module("hashTagWorkApp", ['ui.router', 'ngStorage', 'ngMap', 'ui.mask']);
var app = angular.module("hfTesteApp", ['angularUtils.directives.dirPagination', 'ngRoute', 'ngStorage']);

app.config(function($routeProvider, $locationProvider) {

    /*
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    */

    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/produtos', {
            templateUrl: '/view/produtos.html',
            authorize: true
        })
        .when('/produtos/adicionar', {
            templateUrl: '/view/cadastrarProduto.html',
            authorize: true
        })
        .when('/produtos/editar/:id', {
            templateUrl: '/view/editarProduto.html',
            authorize: true
        })
        .when('/produtos/consultar/:id', {
            templateUrl: '/view/produto.html',
            authorize: true
        })
        .when('/usuarios/cadastrar', {
            templateUrl: '/view/cadastrarUsuario.html'
        })
        .when('/usuarios/login', {
            templateUrl: '/view/login.html'
        })
        .when('/usuarios/refresh', {
            templateUrl: '/view/refresh.html'
        })
        .otherwise({
            redirectTo: '/produtos'
        });
});
