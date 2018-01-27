mapp.directive("directivebook",function(){
console.log("this is initialized book");
 return {

   restrict :"E",
   templateUrl :"views/book.html",
   controller : function($scope){

   }//controller end
 }//return end


})

mapp.directive("directivecharacter",function(){
  console.log("this is initialized character");

 return {

   restrict :"E",
   templateUrl :"views/character.html",
   controller : function($scope){

   }//controller end
 }//return end


})

mapp.directive("directivehouse",function(){
console.log("this is initialized house");
 return {

   restrict :"E",
   templateUrl :"views/house.html",
   controller : function($scope){

   }//controller end
 }//return end
})