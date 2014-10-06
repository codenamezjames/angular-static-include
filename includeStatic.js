angular.module("static-include").directive('includeStatic', function($http, $templateCache, $compile) {
    return function($scope, element, attrs) {
        var templatePath = attrs.includeStatic;

        try{
        	templatePath = $scope.$eval(templatePath);
        }catch(err){
        	throw new Error(attrs.includeStatic+' is not a valid object/string');
        }

        $http.get(templatePath, { cache: $templateCache }).success(function(response) {
            var contents = element.html(response).contents();
            $compile(contents)($scope);
        });
    };
});
