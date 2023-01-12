const validButton = document.querySelector('.login-button');
const emailField = document.querySelector('#email');
const pwField = document.querySelector('#password');

const toggle =(e)=>{
    e.preventDefault();
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
