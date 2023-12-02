function search() {
    let searchbar = document.querySelector('.search_input').value.toUpperCase();
    let product = document.querySelectorAll('.math');

    for (let i = 0; i < product.length; i++) {
        let h3 = product[i].querySelector('h3').innerText.toUpperCase();
        let mega = product[i].querySelector('.mega');

        if (h3.includes(searchbar)) {
            product[i].style.display = '';
        } else {
            product[i].style.display = 'none';
        }
    }
}
