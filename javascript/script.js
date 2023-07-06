const btnEnviar = document.querySelector('.btn-enviar')
const nome = document.querySelector('.nome');
const email = document.querySelector('.email');
const numero = document.querySelector('.numero')



const mensagemEnviada = () => {
    btnEnviar.addEventListener('click', () => {
        if(nome.value && email.value && numero.value) {
            alert('Formulário enviado! 😄')
        }
    })
}


  
mensagemEnviada();
