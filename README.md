angular-static-include
======================

This is a way to include files "staticly" E.G. without creating a new child scope. thanks to this SO question http://stackoverflow.com/questions/12393703/how-to-include-one-partials-into-other-without-creating-a-new-scope

bower install angular-static-include

Usage   
```angular.module('myApp', ['static-include'])```  
  
```<div static-include="'/location/to/include.html'" >```