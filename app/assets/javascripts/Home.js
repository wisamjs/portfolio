  $(document).ready(function(){
  	$("#nav").sticky({topSpacing:0, className:"sticky" });
  	var downArrow = $('.down-arrow');
  	setInterval(function(){
    	downArrow.toggleClass('pulse');
    	console.log('test');
    },700);


    $(document).keyup(function(e) {
    	console.log('you hit something: ' + e.which);

    	if (e.which === 13){
    		console.log('ENTER MUTHA FUCKA');
    	}

    });
  });
