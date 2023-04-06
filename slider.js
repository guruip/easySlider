function Slider() {
    this.imagesUrls = [];
    this.currentImageIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;
    this.start = function(elId) {
        let that = this;

        let elSelector = "#" + elId;
        let el = document.querySelector(elSelector);
        
        this.showPrevBtn = el.querySelector(".show-prev-btn");
        this.showNextBtn = el.querySelector(".show-next-btn");
        this.slideImage = el.querySelector(".slide-img");


        //subscribe to events
        this.showPrevBtn.addEventListener("click", function(e) {
            that.onShowPrevBtnClick(e);
        });

        this.showNextBtn.addEventListener("click", function(e) {
            that.onShowNextBtnClick();
        });

        //create images array
        this.imagesUrls.push("https://cars.usnews.com/static/images/Auto/izmo/i159615202/2023_chevrolet_corvette_stingray_angularfront.jpg");
        this.imagesUrls.push("https://www.supercars.net/blog/wp-content/uploads/2022/09/Best-New-Sports-and-Performance-Cars-2022_Chevrolet_Corvette.jpg");
        this.imagesUrls.push("https://carmart-mediacloud-wp.s3.eu-central-1.amazonaws.com/2022/10/2022-Chevrolet-Camaro.jpg");
        this.imagesUrls.push("https://car-images.bauersecure.com/wp-images/3550/best_sportscar_514.jpg");

        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };

    this.onShowPrevBtnClick = function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;
    
        //disable prev button if need
        if (this.currentImageIndex === 0 ){
            this.showPrevBtn.disabled = true;
        }
    }

    this.onShowNextBtnClick = function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
    
        //disable prev button if need
        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    };
}