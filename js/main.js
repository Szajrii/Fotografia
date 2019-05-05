new Vue({
	el: "#app",
	data: {
		leftSquare:{
			left: 0,
			top: 400
		},
		rightSquare:{
			left: 0,
			top: 0
		},
		offsetTop: 0,
		aboutOffset: document.getElementById('about').offsetTop,
		joinOffset: document.getElementById('join').offsetTop,
		totalOffset: this.aboutOffset - this.offsetTop,
		lastScrollTop: 0,
		scrollDirection: '',
		resize: true
	},
	methods:{
		scrollListener: function(){ 
			this.offsetTop = window.pageYOffset;
		},
		test: function(){
			this.leftSquare.left = 7;
			this.leftSquare.top =  300;

			this.rightSquare.left =  -7;
			this.rightSquare.top = 100;
		},
		getScrollDirection:function(){
		
		       var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
			   if (st > this.lastScrollTop){
			      // downscroll code
			      this.scrollDirection = "down"
			   } else {
			      // upscroll code 
			      this.scrollDirection = "up"
			   }
			   this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
						
		}
	},
	watch:{
		offsetTop: function(){
			
			// if(this.offsetTop  > this.aboutOffset - 350 || this.offsetTop  > this.joinOffset - 150){
			// 	this.resize = false
			// }
			if(this.offsetTop  > this.aboutOffset - 300){
				this.leftSquare.left = 7;
				this.leftSquare.top =  300;

				this.rightSquare.left =  -7;
				this.rightSquare.top = 100;
			}

			if(this.offsetTop  > this.joinOffset - 300 || this.offsetTop  < this.aboutOffset ){
				this.leftSquare.left = 0;
				this.leftSquare.top =  400;

				this.rightSquare.left =  0;
				this.rightSquare.top = 0;
			}

			// if(this.offsetTop  > this.aboutOffset - 400){
			// 	if(this.offsetTop  < this.joinOffset - 200){
			// 		if(this.leftSquare.left < 7 && this.scrollDirection == "down" && this.resize == true){
			// 			this.leftSquare.left = 7;
			// 			this.leftSquare.top =  300;

			// 			this.rightSquare.left =  -7;
			// 			this.rightSquare.top = 100;
			// 		}else if(this.leftSquare.left >= 7 && this.scrollDirection == "up" && this.resize == false){
			// 			this.leftSquare.left = 0;
			// 			this.leftSquare.top =  400;

			// 			this.rightSquare.left =  0;
			// 			this.rightSquare.top = 0;
			// 		}
			// 	}
			// }
		}
	},
	created(){
		window.addEventListener('scroll', this.scrollListener);
		window.addEventListener('scroll', this.getScrollDirection);
	}
})

