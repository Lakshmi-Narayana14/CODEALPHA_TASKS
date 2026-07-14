const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

let currentIndex = 0;

function openLightbox(image){

    lightbox.style.display = "flex";
    lightboxImage.src = image.src;

    galleryImages.forEach((img,index)=>{
        if(img.src === image.src){
            currentIndex = index;
        }
    });

}

function closeLightbox(){

    lightbox.style.display = "none";

}

function changeImage(step){

    currentIndex += step;

    if(currentIndex < 0){
        currentIndex = galleryImages.length - 1;
    }

    if(currentIndex >= galleryImages.length){
        currentIndex = 0;
    }

    lightboxImage.src = galleryImages[currentIndex].src;

}
function filterImages(category) {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        if (category === "all") {
            img.style.display = "block";
        } else {
            if (img.classList.contains(category)) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        }
    });
}