const cardForm = document.getElementById("card-form");
const cardList = document.getElementById("card-list");

const button = document.querySelector("#create");
const form = document.querySelector("#app");

button.addEventListener("click", () => {
    form.classList.add("open");
    alert("Hw");
});

// Функция для создания и добавления карточки в список
function addCard(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `<h2>${card.name}</h2>
    <p>${card.description}</p>
    <img src="${card.imageUrl}" alt="${card.name}">
    <p>Код товара: ${card.productCode}</p>
    <p>Поставщик: ${card.supplier}</p>
    <button onclick="editCard(${card.id})">Редактировать</button>
    <button onclick="deleteCard(${card.id})">Удалить</button>
  `;

    cardList.appendChild(cardElement);
}

// Функция для обновления списка карточек
function updateCardList() {
    cardList.innerHTML = "";

    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    cards.forEach(addCard);
}

// Функция для сохранения новой карточки
function saveCard(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("image-url").value;
    const productCode = document.getElementById("product-code").value;
    const supplier = document.getElementById("supplier").value;

    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    const newCard = {
        id: new Date().getTime(),
        name,
        description,
        imageUrl,
        productCode,
        supplier,
    };

    cards.push(newCard);
    localStorage.setItem("cards", JSON.stringify(cards));

    addCard(newCard);
    cardForm.reset();
}

// Функция для удаления карточки
function deleteCard(id) {
    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    const filteredCards = cards.filter((card) => card.id !== id);

    localStorage.setItem("cards", JSON.stringify(filteredCards));

    updateCardList();
}

// Функция для редактирования карточки
function editCard(id) {
    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    const cardToEdit = cards.find((card) => card.id === id);

    if (cardToEdit) {
        document.getElementById("name").value = cardToEdit.name;
        document.getElementById("description").value = cardToEdit.description;
        document.getElementById("image-url").value = cardToEdit.imageUrl;
        document.getElementById("product-code").value = cardToEdit.productCode;
        document.getElementById("supplier").value = cardToEdit.supplier;

        deleteCard(id);
    }
}

// Обработчик события отправки формы
cardForm.addEventListener("submit", saveCard);

// Загрузка карточек при загрузке страницы
updateCardList();
