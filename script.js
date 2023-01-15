//로그인 페이지
const validButton = document.querySelector('.login-button');
const emailField = document.querySelector('#email');
const pwField = document.querySelector('#password');

const toggle =()=>{
    if(emailField.value && pwField.value){
        validButton.disabled = false;
        validButton.classList.add('login-btn-changed');
    }else{
        validButton.disabled = true;
        validButton.classList.remove('login-btn-changed');
    }
}

emailField.onkeyup = toggle;
pwField.onkeyup = toggle;
validButton.addEventListener('click', ()=>{
    alert('서버가 없어서 로그인은 안되지롱');
})

//프로필 페이지
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
