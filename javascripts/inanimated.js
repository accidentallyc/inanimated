if( !jQuery ){
	console.log("inAnimated.js needs jQuery");
} else{
	!function(){
		var $ = jQuery;
		var last_x = 0;
		var letter_cache = {"sys":-1};
		var last_letter = "sys";
		$.inAnimated = this;
		this.defaults = {
			delay:50,
			interval:180,
			animateClass:"drop"
		};

		var that = this;
		this.animate = function(){
			$("[animate-in]").each( function(){
				var $this = $(this);
					if( !$this.attr("animate-in-class") )
							$this.attr("animate-in-class", that.defaults.animateClass) ;
				var animateIn = $this.attr("animate-in");
				var queue_number;
				
				var number = parseInt(animateIn);

				
				if( number ){
					queue_number = number;
					last_letter = "sys";
					letter_cache[ last_letter ] = number;
				} else{ //is letter
					var X = animateIn[0];
					var rightHand = animateIn.substring(2);
					var operation = animateIn[1];

					switch( operation ){
						case "+": 
							// get the current letter +1
							queue_number = ++letter_cache[ X ];
							break;
						case "=": 
							//get another letter's numbers
							var rightHandNumber = parseInt( rightHand );
							if( rightHandNumber ){
								// if number just assign number
								queue_number = rightHandNumber;
							} else{
								//if not number get the referenced number then + 1
								queue_number = letter_cache[ rightHand ] + 1;	
							}

							break;
						default:
							// get the current letter
							queue_number = letter_cache[ X ] ? letter_cache[ X ] : letter_cache[ last_letter ] ;
					}


					letter_cache[ X ] = queue_number;
					$this.attr("animate-queue-number",queue_number);
					last_letter = X;
				}
				
				var time = that.defaults.interval * queue_number + that.defaults.delay; 
				setTimeout( function(){ $this.attr("animate-in","-1");	}, time);
			});//each animate-in
		}//this.animate
		
	}.apply({}); //anonymous scoping function
}