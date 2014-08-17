  $(document).ready(function(){
  	$("#nav").sticky({topSpacing:0, className:"sticky" });
  	var downArrow = $('.down-arrow');
  	setInterval(function(){
    	downArrow.toggleClass('pulse');
    },700);
  });
