// créer un service de type factory qui prend comme paramètre 'Devices'
// et une fonction qui prend comme paramètre $http puisque
// on  va consommer des données à partir d'un serveur  
angular.module('deviceApp').factory('Devices', function($http){
    // une variable contenant l'url (à partir d'un serveur web) de notre fichier phph
    var datasource = 'http://localhost//listDevices.php?callback=JSON_CALLBACK';
    // retourner les données
    return{
        // la méthode getDevices qui permet de retourner une liste de Devices
        getDevices:function(){
            return $http.jsonp(datasource);
        }
    }
});
