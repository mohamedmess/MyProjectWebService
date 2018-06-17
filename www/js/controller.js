angular.module('deviceApp')
.controller('DevicesController',function(Devices, $scope, $ionicLoading){
    var _this = this; // sauvegarder le contexte courant de notre application
    // ajouter un trigger
    $scope.$on('$ionicView.enter', function(){
        $ionicLoading.show(); // afichage une image de chargement avant de charger les données depuis le serveur
        // appel de la fonction getDevices dans js/service.js
        // response est un objet qui permet de retourner la réponse du serveur
        Devices.getDevices().then(function(response){
            // récuprer les données depuis la réponse du serveur
            _this.devices = response.data; 
        }).catch(function(response){
            // la demande n'est pas réussie
            // request does not successful
            // handle the error
        }).finally(function(){
            $ionicLoading.hide();
        });
    });
})