document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.querySelector('.produits .paquet-produits');

        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('produit');

            const imgDiv = document.createElement('div');
            imgDiv.classList.add('photo');
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = '';

            imgDiv.appendChild(img);

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('details_produit');

            const title = document.createElement('h3');
            title.classList.add('nom');
            const titleLink = document.createElement('a');
            titleLink.href = '';
            titleLink.textContent = product.name;
            title.appendChild(titleLink);

            const price = document.createElement('h3');
            price.classList.add('prix');
            price.textContent = `${product.price} €`;

            const rateDiv = document.createElement('div');
            rateDiv.classList.add('rate');
            for (let i = 0; i < 5; i++) {
                const starSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                starSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                starSvg.setAttribute("width", "10");
                starSvg.setAttribute("height", "10");
                starSvg.setAttribute("fill", "currentColor");
                starSvg.setAttribute("class", "bi bi-star-fill");
                starSvg.setAttribute("viewBox", "0 0 16 16");
                const starPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                starPath.setAttribute("d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z");
                starSvg.appendChild(starPath);
                rateDiv.appendChild(starSvg);
            }

            detailsDiv.appendChild(title);
            detailsDiv.appendChild(price);
            detailsDiv.appendChild(rateDiv);

            productDiv.appendChild(imgDiv);
            productDiv.appendChild(detailsDiv);

            cardContainer.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

    function addToCart(product) {
        const cartItems = document.getElementById('cart-items');
        const listItem = document.createElement('li');
        listItem.textContent = product.name;
        cartItems.appendChild(listItem);
    }

    function addToFavorites(product) {
        const favoriteItems = document.getElementById('favorite-items');
        const listItem = document.createElement('li');
        listItem.textContent = product.name;
        favoriteItems.appendChild(listItem);
    }
});
