(function(){

    const dropdownA = document.querySelector('.dropdown>a');
    const dropdown = document.querySelector('.dropdown');

    document.addEventListener('click', e => {

        const el = e.target;

        if(el == dropdownA){
            e.preventDefault();
            dropdown.classList.toggle('dropdown-mostrar');
        }

    });

})();