const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
const checkbox = document.querySelector('input[type="checkbox"]')
const labelPassword = document.querySelector('#label-password')
const button = document.querySelector('button')

button.addEventListener('click', (event) => {
    event.preventDefault()

   const emailValue = email.value
   const passwordValue = password.value

   if (!emailValue || !passwordValue){
    alert('preencha todos os campos.')
    return
   }

   if (
    emailValue !== sessionStorage.getItem('email') || 
    passwordValue !== sessionStorage.getItem('password')
    ){
    alert('Email e/ou senha incorreto')
    return
    }    
   
   alert('Acesso permitido.')

})


checkbox.addEventListener('change', () => {
  const atributeValue = password.getAttribute('type')

  if (atributeValue === 'password'){
        password.setAttribute('type', 'text')
        labelPassword.textContent = 'Ocultar Senha'
        return     
  }

    password.setAttribute('type', 'password')
    labelPassword.textContent = 'Mostrar Senha'

})