const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

let xxx = "xxx"

/* Looping through images */

let i;
for (i = 0; i < 5; i++) {

    xxx = `images/pic${i + 1}.jpg`
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {

        displayedImage.setAttribute('src', newImage.src);

    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {

    if (btn.className === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }

});
