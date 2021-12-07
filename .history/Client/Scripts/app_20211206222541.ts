//IIFE -- Immediately Invoked Function Expression
"use strict";

(function(){

    function confirmDelete()
    {
      // confirm deletion
      $(".delete").on("click", function(event){
        if(!confirm("Are you sure?"))
        {
          event.preventDefault();
          location.href = '/';
        }       
      });
    }

    function Start():void
    {
        console.log("App Started");
        
        confirmDelete();  
    }

    window.addEventListener("load", Start);

})();
