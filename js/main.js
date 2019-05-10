new Vue({
	el: "#app",
	data: {
		offsetTop: 0,
		modalView: false,
		images: [
			'img/images/0.jpg',
			'img/images/1.jpg',
			'img/images/2.jpg',
			'img/images/3.jpg',
			'img/images/4.jpg',
			'img/images/5.jpg',
			'img/images/6.jpg',
			'img/images/7.jpg',
			'img/images/8.jpg',
			'img/images/9.jpg',
			'img/images/10.jpg',
			'img/images/11.jpg',
		],
		activeImage: '',
		activeId : 100
				
	},
	methods:{
		scrollListener: function(){ 
			this.offsetTop = window.pageYOffset;
		},
		setModalView: function(event){
			this.activeId = event.currentTarget.id;
			this.modalView = true;
			this.activeImage = this.images[this.activeId];
		},
		nextImage: function(){
			if(this.activeId < 11){
				this.activeId ++
				this.activeImage = this.images[this.activeId];
			}else{
				this.activeId = 0
				this.activeImage = this.images[this.activeId];
			}
		},
		previousImage: function(){
			if(this.activeId > 0){
				this.activeId --
				this.activeImage = this.images[this.activeId];
			}else{
				this.activeId = 11
				this.activeImage = this.images[this.activeId];
			}
		},
		closeModal: function(){
			this.modalView = false;
			this.activeId = 100;
			this.activeImage = '';
		}
		
	},
	watch:{
		
	},
	created(){
		window.addEventListener('scroll', this.scrollListener);
		window.addEventListener('scroll', this.getScrollDirection);
	}
})

