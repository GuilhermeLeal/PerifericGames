(function(){

    const divUsuario = document.querySelector('.input-usuario');
    const inputUsuario = document.querySelector('#usuario');

    const divCpfErro = document.querySelector('.input-cpf-erro');
    const inputCpfErro = document.querySelector('#cpf');

    const divSenha1Erro = document.querySelector('.input-senha1-erro');
    const inputSenha1Erro = document.querySelector('#senha1');

    const divSenha2Erro = document.querySelector('.input-senha2-erro');
    const inputSenha2Erro = document.querySelector('#senha2');

    const inputEmail = document.querySelector('#email');
    const inputData = document.querySelector('#data');

    const formulario = document.querySelector('.formulario');

    document.addEventListener('submit', e => {

        const el = e.target;    
        e.preventDefault();

        let validador = true;

        if(inputUsuario.value == '' || inputCpfErro.value == '' || inputSenha1Erro.value == '' || inputSenha2Erro.value == ''
        || inputEmail.value == '' || inputData.value == ''){
            const span = document.createElement('span');
            span.innerHTML = 'Nenhum campo pode estar vazios!';
            formulario.appendChild(span);
            validador = false;
        } else{
            if(inputCpfErro.value.length != 11){
                const span = document.createElement('span');
                span.innerHTML = 'O CPF tem que ter 11 números!';
                divCpfErro.appendChild(span);
                validador = false;
            } 
        
            if(inputUsuario.value.length < 3){
                const span = document.createElement('span');
                span.innerHTML = 'O usuário precisa ter no mínimo 3 caracteres!';
                divUsuario.appendChild(span);
                validador = false;
            }
        
            if(inputSenha1Erro.value.length < 6 || inputSenha1Erro.value.length > 10){
                const span = document.createElement('span');
                span.innerHTML = 'As senhas precisam conter entre 6 e 10 caracteres!';
                divSenha2Erro.appendChild(span);
                validador = false;
            }
        
            if(inputSenha1Erro.value != inputSenha2Erro.value){
                const span = document.createElement('span');
                span.innerHTML = 'As senhas tem que ser iguais!';
                divSenha2Erro.appendChild(span);
                validador = false;
            }

            const usuarioCadastrado = JSON.parse(localStorage.getItem('usuario'));
            const cpfCadastrado = JSON.parse(localStorage.getItem('cpf'));
            const emailCadastrado = JSON.parse(localStorage.getItem('email'));

            console.log(usuarioCadastrado);
            console.log(cpfCadastrado);
            console.log(emailCadastrado);

            if(usuarioCadastrado == inputUsuario.value || 
                cpfCadastrado == inputCpfErro.value || 
                emailCadastrado == inputEmail.value){

                const span = document.createElement('span');
                span.innerHTML = 'Esse usuário já foi cadastrado!';
                formulario.appendChild(span);
                validador = false;
            }
        }

        const dataRegistro = new Date();
        const opcoes = {
            dateStyle: 'full',
            timeStyle: 'short',
        }

        if(validador){
            const usuarioJSON = JSON.stringify(inputUsuario.value);
            const cpfJSON = JSON.stringify(inputCpfErro.value);
            const emailJSON = JSON.stringify(inputEmail.value);
            const senhaJSON = JSON.stringify(inputSenha1Erro.value);
            const dataJSON = JSON.stringify(inputData.value);

            localStorage.setItem(`usuario`, usuarioJSON);
            localStorage.setItem(`cpf`, cpfJSON);
            localStorage.setItem(`email`, emailJSON);
            localStorage.setItem(`senha`, senhaJSON);
            localStorage.setItem(`data_cadastro`, dataRegistro.toLocaleString('pt-BR', opcoes));
            localStorage.setItem(`data`, dataJSON);

            window.location.assign("login.html")
        }

    });

})();