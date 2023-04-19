(function(){

    const inputSenha = document.querySelector('#senha');
    const inputEmail = document.querySelector('#email');

    const formulario = document.querySelector('.formulario');

    const sucesso = document.querySelector('.sucesso');

    try{
        const usuarioLocalStorage = localStorage.getItem('usuario');
        if(usuarioLocalStorage){
            sucesso.innerHTML = 'Você foi cadastrado com sucesso!';
        }
    }
    catch{}

    document.addEventListener('submit', e => {

        const el = e.target;    
        e.preventDefault();

        let validador = true;

        const emailLocalStorage = localStorage.getItem('email');
		const emailLocalStorageJS = JSON.parse(emailLocalStorage);

        const senhaLocalStorage = localStorage.getItem('senha');
		const senhaLocalStorageJS = JSON.parse(senhaLocalStorage);

        if(inputEmail.value == emailLocalStorageJS && inputSenha.value == senhaLocalStorageJS){
            window.location.assign("produtos.html")
        } else{
            const span = document.createElement('span');
            span.innerHTML = 'E-mail ou senha inválidos!';
            formulario.appendChild(span);
        }

});

})();