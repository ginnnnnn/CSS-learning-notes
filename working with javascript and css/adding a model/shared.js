const btns = document.querySelectorAll('.button');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const noBtn = document.querySelector('.modal__action--negative');

// console.dir(noBtn)
//console.dir can see the DOM object property

// console.dir(backdrop.style['background-image']) //if you dont use camal case

// modal
if (btns) {
    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            // modal.style.display = 'block ';
            // backdrop.style.display = 'block';
            //.style is added as inline style so it gets higher specifity
            // modal.className = 'open' //this will overwrite all class
            modal.classList.add('open');
            backdrop.classList.add('open');
            /*
            check the specifity or add !important to css
            in this case cus we import shared.css before main.css so the modal has higher
            specifity
             */
        })
    });
}

backdrop.addEventListener('click', e => {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none ';
    // sideDraw.style.display = 'none';
    if (modal) {
        //check if modal exist,cus it doesnt exist in other page
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    sideDraw.classList.remove('open');
});

if (noBtn) {
    //check if no button exist,cus it doesnt exist in other page
    noBtn.addEventListener('click', e => {
        // backdrop.style.display = 'none';
        // modal.style.display = 'none ';
        modal.classList.remove('open');
        backdrop.classList.remove('open');
    });
}

//side-draw

const sideDraw = document.querySelector('.mobile-nav');
const sideBar = document.querySelector('.toggle-button');

sideBar.addEventListener('click', e => {
    // sideDraw.style.display = 'block';
    // backdrop.style.display = 'block';
    sideDraw.classList.add('open');
    backdrop.classList.add('open');
})
