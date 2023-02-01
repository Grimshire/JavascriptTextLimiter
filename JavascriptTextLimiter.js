var JavaScriptLimiter = {
	//to override this, just use JavaScriptLimiter["Text2Add] or JavaScriptLimiter.Text2Add
  //for blanks, do not use null, but use ""
	Text2Add: " characters remaining"
};

//JavaScriptLimiter.Text2Add = "";

(function() {	  

  	var marginLefts = new Array();
    function tbLimit() { //text max length function
          var tbObj = event.srcElement;
          //console.log("" + tbObj.value.length + ":" + tbObj.maxLength);
          if (tbObj.value.length == tbObj.maxLength * 1) return false; 
		}

    document.addEventListener('keyup', function (event) {
      var textareas = document.getElementsByClassName("txtLimit"); //depends on a txtLimit element for every txtFeedback element
     
      var feedbacks = document.getElementsByClassName("txtFeedback");  
      for (var i = 0; i < textareas.length; i++) {
        var thisElem = textareas[i];
        var feedback = feedbacks[i];
        
        if(document.getElementById(feedback.id)) {        
          var text_max = thisElem.maxLength;                      
          var text_length = thisElem.value.length; //char count
          var text_remaining = thisElem.maxLength - text_length;
          if (text_length > 250)
          {
            feedback.style.marginTop = 0;
            feedback.style.marginBottom = -5;

          }                  
        	          
        	feedback.innerHTML = text_length + '/' + text_max; 
          feedback.innerHTML += JavaScriptLimiter.Text2Add;     
                    
      }

    }
    });
          
})();

