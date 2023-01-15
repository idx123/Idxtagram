let radioBtns = document.querySelectorAll('input[type="radio"]');

radioBtns.forEach(i=>{ 
    i.addEventListener('click', (e)=>{
        activate(e.target);
    })
});

function activate(radio){
    let conArr = document.querySelectorAll('.contents');
    conArr.forEach(i =>{ 
        i.classList.remove('active');
    });
    let con = document.querySelector(`.${radio.id}`);
    con.classList.add('active');
}