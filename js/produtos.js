(function(){

    const h1 = document.querySelector('.popup');

    const usuarioLocalStorage = localStorage.getItem('usuario');
    const usuarioLocalStorageJS = JSON.parse(usuarioLocalStorage);
    const dataCadastroStorage = localStorage.getItem('data_cadastro');

    h1.innerHTML = 'Bem-vindo ' + usuarioLocalStorageJS + '! ' + 'Você se cadastrou em: ' + dataCadastroStorage;

})();