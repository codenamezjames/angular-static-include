angular.module("static-include", []).directive('staticInclude', function($templateRequest, $compile) {
  return {
    restrict: 'A',
    transclude: true,
    replace: true,
    scope: false,
    link: function($scope, element, attrs, ctrl, transclude) {
      var templatePath = attrs.staticInclude;

      try{
        templatePath = $scope.$eval(templatePath);
      }catch(err){
        throw new Error(attrs.staticInclude+' is not a valid object');
      }

      $templateRequest(templatePath)
        .then(function(response) {
          var contents = element.html(response).contents();
          $compile(contents)($scope.$new(false, $scope.$parent));
        });
    }
  };
});
