(function($){

$.fn.rTip = function(p) {

	p = $.extend({
		tag:"tooltip",
		ajaxMode:false,
                ajaxUrl:null,
                ajaxData: null,
		leftSpacing:5,
		topSpacing:10,
		maxWidth: 300
	}, p);	
	return this.each(function(index){
                
		this.preinit = function() {
                        if (p.ajaxMode) this.ajaxRequest();
			this.addListeners();
			this.createStructure();
		}		
		this.addListeners = function() {		
			$(this).bind("mouseover", this.show).bind("mouseout", this.hide);		
		}		
		this.ajaxRequest = function() {
                    var _this = this;

                   $.ajax({
                        type:"GET",
                        url: p.ajaxUrl,
                        dataType:"html",
                        data: p.ajaxData + $(this).attr(p.tag),
                        success:function(data) {
                            if (data) {
                                $(_this).attr(p.tag, data);
                            } else {
                                $(_this).removeAttr(p.tag);
                                $(_this).hide();
                            }
                        }
                    });
 		}		

		this.setText = function() {               
                    $(this.wrapper).html($(this).attr(p.tag));
		}
		this.createStructure = function() {		
			this.wrapper = document.createElement("div");
			$(this.wrapper).addClass("wrapper");
			this.tip = document.createElement("div");
			$(this.tip).addClass("tooltip").append(this.wrapper);			
			$("body").append(this.tip);		
		}		
		this.getY = function() {		
			var sizeY = $(this).position().top + p.topSpacing;			
			if ( (sizeY + $(this.tip).height()) > $(window).height() + $(window).scrollTop() ) sizeY = $(this).position().top - $(this.tip).height() - p.topSpacing;		
			return sizeY;			
		}		
		this.getX = function() {		
			var sizeX = $(this).position().left + $(this).width() + p.leftSpacing;		
			if ( (sizeX + $(this.tip).width()) > $(window).width()  + $(window).scrollLeft() ) sizeX = $(this).position().left - $(this.tip).width() - p.leftSpacing;			
			return sizeX;		
		}		
		this.getWidth = function() {			
			return Math.min($(this.tip).width(), p.maxWidth);			
		}		
		this.show = function() {
			this.setText();		
			$(this.tip).css("width", "auto").css("width", this.getWidth()).css("top", this.getY()).css("left", this.getX()).show();
		}		
		this.hide = function() {		
			$(this.tip).hide();		
		}	
                
		this.preinit();	
                
	});	
};
		
})(jQuery);


