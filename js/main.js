new Vue({
	el: "#app",
	data: {
		offsetTop: 0,
				
	},
	methods:{
		scrollListener: function(){ 
			this.offsetTop = window.pageYOffset;
		},
		getScrollDirection:function(){
		
		       var st = window.pageYOffset || document.documentElement.scrollTop; 
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
		
	},
	created(){
		window.addEventListener('scroll', this.scrollListener);
		window.addEventListener('scroll', this.getScrollDirection);
	}
})

