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

   sessionStorage.setItem('email', emailValue)
   sessionStorage.setItem('password', passwordValue)

   alert('Usuario registrado com sucesso.')

   window.location.href = './login.html'
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