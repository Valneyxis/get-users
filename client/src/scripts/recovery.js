const email = document.querySelector('input[type="email"]')
const newPassword = document.querySelector('#new-password')
const confirmNewPassword = document.querySelector('#confirm-new-password')
const checkbox = document.querySelector('input[type="checkbox"]')
const labelPassword = document.querySelector('#label-password') 
const button = document.querySelector('button')

button.addEventListener('click',(event) => {
    event.preventDefault()
    
    const emailValue = email.value
    const newPasswordValue = newPassword.value
    const confirmNewPasswordValue = confirmNewPassword.value

    
   if (!emailValue || !newPassword || !confirmNewPassword){
    alert('preencha todos os campos.')
    return
   }

    if (emailValue !== sessionStorage.getItem('email')) 
        return alert('Email não registrado.')


    if (newPasswordValue !== confirmNewPasswordValue)
        return alert('As senhas não coincidem. Tente novamente.')


    sessionStorage.setItem('password', newPasswordValue)
    alert('Senha atualizada com sucesso.')

    window.location.href = './login.html'
})

checkbox.addEventListener('change', () => {
  const atributeValue = newPassword.getAttribute('type')
    if (atributeValue === 'password'){
        newPassword.setAttribute('type', 'text')
        confirmNewPassword.setAttribute('type', 'text')
        labelPassword.textContent = 'Ocultar Senha'
        return     
  }

    newPassword.setAttribute('type', 'password')
    confirmNewPassword.setAttribute('type', 'password')
    labelPassword.textContent = 'Mostrar Senha'

})