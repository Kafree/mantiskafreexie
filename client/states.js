angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.viewissues', {
        views: {
            app: {
                controller: 'app_viewissues',
                templateProvider: function (app) {
                    return app.templateProvider('app.viewissues');
                }
            }
        }
    }).state('app.loginconfident', {
        views: {
            app: {
                controller: 'app_loginconfident',
                templateProvider: function (app) {
                    return app.templateProvider('app.loginconfident');
                }
            }
        }
    }).state('app.formlargeclassic', {
        views: {
            app: {
                controller: 'app_formlargeclassic',
                templateProvider: function (app) {
                    return app.templateProvider('app.formlargeclassic');
                }
            }
        }
    }).state('app.reportissue', {
        views: {
            app: {
                controller: 'app_reportissue',
                templateProvider: function (app) {
                    return app.templateProvider('app.reportissue');
                }
            }
        }
    }).state('app.viewissuelist', {
        views: {
            app: {
                controller: 'app_viewissuelist',
                templateProvider: function (app) {
                    return app.templateProvider('app.viewissuelist');
                }
            }
        }
    });
});