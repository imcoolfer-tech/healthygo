const image = document.getElementById("floating-image");

let position = 0;
let direction = -1;

function animateImage() {
    position += direction * 0.5;

    if (position <= -20) {
        direction = 1;
    }

    if (position >= 0) {
        direction = -1;
    }

    image.style.transform = `translateY(${position}px)`;

    requestAnimationFrame(animateImage);
}

animateImage();
