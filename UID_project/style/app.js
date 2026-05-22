// ================= MOBILE NAV =================

const bar = document.querySelector("#bar");
const cross = document.querySelector("#cross");
const nav = document.querySelector(".nav");

bar.addEventListener('click', () => {

    bar.style.display = 'none';

    cross.style.display = 'block';

    nav.style.left = '20%';

});

cross.addEventListener('click', () => {

    bar.style.display = 'block';

    cross.style.display = 'none';

    nav.style.left = '100%';

});

// ================= RESIZE FIX =================

window.addEventListener('resize', () => {

    if(window.innerWidth > 1024){

        nav.style.left = '0';

        bar.style.display = 'none';

        cross.style.display = 'none';

    }

    else{

        nav.style.left = '100%';

        bar.style.display = 'block';

        cross.style.display = 'none';

    }

});

//Banner(card) movement:

//Banner(card) movement:

const track = document.querySelector(".marquee-track");

if(track){

    const cards = [...track.children];

    cards.forEach((card) => {

        const clone = card.cloneNode(true);

        track.appendChild(clone);

    });

}

// ================= FOOTER ARROW =================

const arrow = document.querySelectorAll(".arrow");

arrow.forEach((e) => {

    e.addEventListener('click', () => {

        const footerlist = e.parentElement.nextElementSibling;

        if(e.classList.contains('temp')){

            e.classList.remove('temp');

            footerlist.style.display = 'none';

            e.style.transform = 'rotate(0deg)';
        }

        else{

            e.classList.add('temp');

            footerlist.style.display = 'block';

            e.style.transform = 'rotate(180deg)';
        }

    });

});
