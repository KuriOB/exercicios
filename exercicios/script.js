//Andrey Constante da Silva
//Exercícios

//exercício 1
const trocaTexto = document.getElementById('botaoTrocaTexto');
const textoP = document.getElementById('Texto');

trocaTexto.addEventListener('click', function() {
    textoP.textContent = "Texto alterado via JavaScript";
});

//exercício 2
const botaoLista = document.getElementById('ulBotao');
const Lista = document.getElementById('ulDinamico');
botaoLista.addEventListener('click', function() {
    const elementoNovo = document.createElement('p');
    const elementoNovo1 = document.createElement('p');
    const elementoNovo2 = document.createElement('p');
    elementoNovo.textContent = 'a';
    elementoNovo1.textContent = 'b';
    elementoNovo2.textContent = 'c';
Lista.appendChild(elementoNovo);
Lista.appendChild(elementoNovo1);
Lista.appendChild(elementoNovo2);
});

//exercício 3
const botaoCSS = document.getElementById('botaoEstiloso');
botaoCSS.addEventListener('click', function() {
    botaoCSS.style.backgroundColor = 'yellow';
    botaoCSS.style.width = '300px';
});

//exercício 4
const botaoForm = document.getElementById('formularioBotao');
const ulFormulario = document.getElementById('ulForm')
const userForm = document.createElement('p') 
const emailForm = document.createElement('p') 
const checkForm = document.createElement('p') 
botaoForm.addEventListener('click', function() {
    const form = document.getElementById('Form');
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const checkFormulario = document.getElementById('checkFormulario').checked;

        userForm.textContent =  ``;
        emailForm.textContent = ``;
        checkForm.textContent = ``;

            userForm.textContent =  `Username: ${username}`;
            emailForm.textContent = `email: ${email}`
            checkForm.textContent = `Check Box: ${checkFormulario}`

    ulFormulario.appendChild(userForm)
    ulFormulario.appendChild(emailForm)
    ulFormulario.appendChild(checkForm)
})

//exercício 5
const blocoAmarelo = document.getElementById('blocoYellow');
  
blocoAmarelo.addEventListener('mouseover', function() {
    blocoAmarelo.style.backgroundColor = 'blue';
  });

  blocoAmarelo.addEventListener('mouseout', function() {
    blocoAmarelo.style.backgroundColor = 'yellow';
  });