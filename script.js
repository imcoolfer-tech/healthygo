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

const SUPABASE_URL =
    "https://ywqykskhxpymbmjihnkg.supabase.co/rest/v1/";
const SUPABASE_KEY = 
    "sb_publishable_elTfOXUjfpJc-Sy7Wv40yg_GauYRbwl";

const supabaseClient = 
    supabase.createClient (
    SUPABASE_URL,
    SUPABASE_KEY
);

