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
            controller: 'ProdutoCtrl',
            authorize: true
        })
        .when('/produtos/adicionar', {
            templateUrl: '/view/cadastrarProduto.html',
            controller: 'ProdutoCtrl',
            authorize: true
        })
        .when('/produtos/editar/:id', {
            templateUrl: '/view/editarProduto.html',
            controller: 'ProdutoCtrl',
            authorize: true
        })
        .when('/produtos/consultar/:id', {
            templateUrl: '/view/produto.html',
            controller: 'ProdutoCtrl',
            authorize: true
        })
        .when('/usuarios/cadastrar', {
            templateUrl: '/view/cadastrarUsuario.html',
            controller: 'UsuarioCtrl'
        })
        .when('/usuarios/login', {
            templateUrl: '/view/login.html',
            controller: 'UsuarioCtrl'
        })
        .when('/usuarios/refresh', {
            templateUrl: '/view/refresh.html',
            controller: 'UsuarioCtrl'
        })
        .otherwise({
            redirectTo: '/produtos'
        });
});
