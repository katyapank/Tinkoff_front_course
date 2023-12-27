document.addEventListener("DOMContentLoaded", () => {
    const formcont = document.querySelector("#app");
    const form = document.getElementById("card-form");
    const cardList = document.getElementById("card-list");
    const create = document.querySelector("#create");
    const close_form = document.querySelector("#close");

    create.addEventListener("click", () => {
        formcont.classList.add("open");
    });

    close_form.addEventListener("click", () => {
        formcont.classList.remove("open");
    });

    async function editCard(index) {
        const products = await fetch("http://localhost:3000/cards").then(
            (response) => response.json()
        );
        const product = products.find((product) => product.id === index);
        if (product) {
            formcont.classList.add("open");
            form.name.value = product.name;
            form.description.value = product.description;
            form.imageUrl.value = product.imageUrl;
            form.productcode.value = product.id;
            form.supplier.value = product.supplier;
            form.dataset.editIndex = index;
        }
    }

    window.editCard = editCard;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const productData = {
            id: Number(form.productcode.value),
            name: form.name.value,
            description: form.description.value,
            imageUrl: form.imageUrl.value,
            supplier: form.supplier.value,
        };

        if (form.dataset.editIndex) {
            updateProduct(productData);
            delete form.dataset.editIndex;
        } else {
            saveProduct(productData);
        }

        form.reset();
        loadProducts();
    });

    async function loadProducts() {
        document
            .getElementsByClassName("loader")[0]
            .classList.remove("invisible");
        try {
            let products = await fetch("http://localhost:3000/cards").then(
                (response) => response.json()
            );
            products = products ? products : [];
            cardList.innerHTML = "";
            for (let product of products) {
                displayProduct(product);
            }
        } catch (err) {
            alert("Произошла ошибка загрузки карточек");
        }
        document.getElementsByClassName("loader")[0].classList.add("invisible");
    }

    async function loadCreatorInfo() {
        let creatorInfo = await fetch("http://localhost:3000/profile").then(
            (response) => response.json()
        );
        document.getElementById(
            "creatorInfo"
        ).textContent = `${creatorInfo.name} ${creatorInfo.group}`;
    }

    async function updateProduct(productData) {
        await fetch(`http://localhost:3000/cards/${productData.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(productData),
        });
    }

    async function saveProduct(productData) {
        cardList.innerHTML = "";
        document
            .getElementsByClassName("loader")[0]
            .classList.remove("invisible");
        await fetch("http://localhost:3000/cards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(productData),
        });
        displayProduct(productData);
        document.getElementsByClassName("loader")[0].classList.add("invisible");
    }

    function displayProduct(card) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <div class="card__top">
                <img src="${card.imageUrl}" alt="${card.name}">
                <div class="card__label">${card.id}</div>
            </div>
            <div class="card__bottom">
                <a href="#" class="card__title">${card.name}</a>
                <div class="card__description">${card.description}</div>
                <div class="card__seller">Поставщик: ${card.supplier}</div>
            </div>
            <div class="card__btns">
                    <button class="card-btn" onclick="editCard(${card.id})">Редактировать</button>
                    <button class="card-btn delete" onclick="deleteCard(${card.id})">Удалить</button>
            </div>
        `;
        cardList.appendChild(cardElement);
    }

    window.deleteCard = (index) => {
        fetch(`http://localhost:3000/cards/${index}`, {
            method: "DELETE",
        }).then(() => {
            loadProducts();
        });
    };

    loadProducts();
    loadCreatorInfo();
});
