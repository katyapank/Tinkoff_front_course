document.addEventListener("DOMContentLoaded", function () {
    const cards = document.getElementById("cards");
    const form = document.getElementById("add_form");
    const addButton = document.getElementById("add_button");
    addButton.addEventListener("click", function () {
        const element = {
            imgPath: document.getElementById("imgPath").value,
            prodName: document.getElementById("prodName").value,
            description: document.getElementById("description").value,
            prodNum: document.getElementById("prodNum").value,
            prodOwner: document.getElementById("prodOwner").value,
        };
        localStorage.setItem(element.prodNum, JSON.stringify(element));
        const div = document.createElement("div");
        div.innerHTML = `<div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
        <div class="card_content">
            <div class = "card_info">
                <a href="#">
                    <div class="card_img">
                        <img 
                            class="rounded-t-lg"
                            src="${element.imgPath}"
                            alt=""
                        />
                    </div>
                </a>
                <div class="text_info">
                    <a href="#">
                        <h5
                            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            ${element.prodName}
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        ${element.description}
                    </p>
                </div>
                <div class="btns">
                    <a
                            href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Изменить
                            
                    </a>
                    <a
                            href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Удалить
                            
                    </a>
                </div>
            </div>
        </div>`;
        cards.appendChild(div);
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем отправку
        event.target.reset();
    });
});

for (var item in localStorage) {
    const cards = document.getElementById("cards");
    const div = document.createElement("div");
    el = JSON.parse(localStorage.getItem(item));
    div.innerHTML = `<div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
    <div class="card_content">
        <div class = "card_info">
            <a href="#">
                <div class="card_img">
                    <img 
                        class="rounded-t-lg"
                        src="${el.imgPath}"
                        alt=""
                    />
                </div>
            </a>
            <div class="text_info">
                <a href="#">
                    <h5
                        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    >
                        ${el.prodName}
                    </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    ${el.description}
                </p>
            </div>
            <div class="btns">
                <a
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Изменить
                        
                </a>
                <a
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >
                        Удалить
                        
                </a>
            </div>
        </div>
    </div>`;
    cards.appendChild(div);
}
