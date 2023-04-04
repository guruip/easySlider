//find elements
let showPrevBtn = document.getElementById("show-prev-btn");
let showNextBtn = document.getElementById("show-next-btn");
let slideImage = document.getElementById("slide-img");

//subscribe to events
showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);

//create images array
let imagesUrls = [];
imagesUrls.push("https://cars.usnews.com/static/images/Auto/izmo/i159615202/2023_chevrolet_corvette_stingray_angularfront.jpg");
imagesUrls.push("https://www.supercars.net/blog/wp-content/uploads/2022/09/Best-New-Sports-and-Performance-Cars-2022_Chevrolet_Corvette.jpg");
imagesUrls.push("https://carmart-mediacloud-wp.s3.eu-central-1.amazonaws.com/2022/10/2022-Chevrolet-Camaro.jpg");
imagesUrls.push("https://car-images.bauersecure.com/wp-images/3550/best_sportscar_514.jpg");

let currentImageIndex = 0;

slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

//function definitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    //disable prev button if need
    if (currentImageIndex === 0 ){
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    //disable prev button if need
    if (currentImageIndex === (imagesUrls.length - 1 ) ){
        showNextBtn.disabled = true;
    }
}  