angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
var $container  = $( '#flip' ),
        $pages    = $container.children().hide();
      
      Modernizr.load({
        test: Modernizr.csstransforms3d && Modernizr.csstransitions,
        yep : ['lib/js/jquery.tmpl.min.js','lib/js/jquery.history.js','lib/js/core.string.js','lib/js/jquery.touchSwipe-1.2.5.js','lib/js/jquery.flips.js'],
        nope: 'lib/css/fallback.css',
        callback : function( url, result, key ) {
          
          if( url === 'lib/css/fallback.css' ) {
            $pages.show();
          }
          else if( url === 'lib/js/jquery.flips.js' ) {
            $container.flips();
          }
      
        }
      });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  var $container  = $( '#flip' ),
        $pages    = $container.children().hide();
      
      Modernizr.load({
        test: Modernizr.csstransforms3d && Modernizr.csstransitions,
        yep : ['lib/js/jquery.tmpl.min.js','lib/js/jquery.history.js','lib/js/core.string.js','lib/js/jquery.touchSwipe-1.2.5.js','lib/js/jquery.flips.js'],
        nope: 'lib/css/fallback.css',
        callback : function( url, result, key ) {
          
          if( url === 'lib/css/fallback.css' ) {
            $pages.show();
          }
          else if( url === 'lib/js/jquery.flips.js' ) {
            $container.flips();
          }
      
        }
      });
});
