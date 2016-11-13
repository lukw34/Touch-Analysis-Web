var app = angular.module('ngApp', ['ngMaterial', 'ui.router', 'angular-loading-bar', 'ngAnimate', 'base', 'ngTable']);
app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    cfpLoadingBarProvider.includeBar = true;
}])