/**
 * Created by Grigor on 2/19/16.
 */
import Angular from "mangular/annotate";
import {Config} from "mangular/annotate";
import {Run} from "mangular/annotate";
import {Inject} from "mangular/annotate";
import "mangular/angular/material";
import "mangular/angular/animate";
import "mangular/angular/ui-router";
import "mangular/angular/aria";
import "mangular/angular/table";

import "./components/dashboard";
import "./components/logIn";
import "./components/privateLayout";
import "./components/publicLayout";
import "./directives/menuLink";
import "./directives/menuToggle";
import "./services/menu";
class MyApp {

    @Config
    static config(
        @Inject('$urlRouterProvider') $urlRouterProvider,
        @Inject('$stateProvider') $stateProvider,
        @Inject('$mdThemingProvider') $mdThemingProvider){
        $mdThemingProvider.definePalette('docs-blue', $mdThemingProvider.extendPalette('blue', {
            '50': '#DCEFFF',
            '100': '#AAD1F9',
            '200': '#7BB8F5',
            '300': '#4C9EF1',
            '400': '#1C85ED',
            '500': '#106CC8',
            '600': '#0159A2',
            '700': '#025EE9',
            '800': '#014AB6',
            '900': '#013583',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': '50 100 200 A100',
            'contrastStrongLightColors': '300 400 A200 A400'
        }));
        $mdThemingProvider.definePalette('docs-red', $mdThemingProvider.extendPalette('red', {
            'A100': '#DE3641'
        }));
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
        $mdThemingProvider.theme('default')
            .primaryPalette('docs-blue')
            .accentPalette('docs-red');
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider
            .state('public', {
                abstract: true,
                views: {
                    '@' : {
                        template: '<wc-public-layout></wc-public-layout>',
                    }
                },
                data: {
                    access: 'UNAUTHORIZED'
                }
            })
            .state('private', {
                abstract: true,
                views: {
                    '@' : {
                        template: '<wc-private-layout></wc-private-layout>',
                    }
                },
                data: {
                    access: 'AUTHORIZED'
                }
            })
            .state('public.login', {
                url:'/login',
                template: `
                    <wc-login></wc-login>
                `
            })
            .state('private.dashboard',{
                url:'/dashboard',
                template: `
                    <wc-dashboard></wc-dashboard>
                `
            })
            .state('private.monitor',{
                url:'/monitor',
                template: `
                    monitor
            `
            });
    }

    @Run
    static run(@Inject('$rootScope') rootScope , @Inject('$state') $state,@Inject ('Auth') auth){
        rootScope.globals = auth.getFromLocalStorage('globals') || {};
        rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if(toState.data.access =='AUTHORIZED' &&  !rootScope.globals.currentUser){
                $state.go('/login');
            }
            if(toState.data.access =='UNAUTHORIZED' &&  rootScope.globals.currentUser){
                $state.go(fromState.name);
            }
        });
    }

}


Angular.start('mangular/auth/index');

