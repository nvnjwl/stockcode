(function() {
    let cardMasterData = [{
        title: "Title 1",
        description: "Description 1",
        url: "https://www.google.com"
    }, {
        title: "Title 2",
        description: "Description 2",
        url: "https://www.google.com"
    }, {
        title: "Title 3",
        description: "Description 3",
        url: "https://www.google.com"
    }];


    function renderApplication() {
        renderAllCards(cardMasterData);
    }


    function renderEachCard(eachCardData) {
        let card = document.createElement("div");
        card.className = "eachCard";
        card.innerHTML = `<div class="card-title">${eachCardData.title}</div>
        <div class="card-description">${eachCardData.description}</div>
        <div class="card-url"><a href="${eachCardData.url}">${eachCardData.url}</a></div>`;
        return card;
    }

    function renderAllCards(cardData) {
        let cardContainer = document.getElementById("app");
        cardContainer.classList.add("card-container");
        cardData.forEach(eachCardData => {
            let eachCard = renderEachCard(eachCardData);
            cardContainer.appendChild(eachCard);
            eachCard.addEventListener
        });
    }


    function openCardModal()



    function bodyOnload() {
        renderApplication();
    }

    function registerBodyOnload() {
        if (document.body) {
            bodyOnload();
        } else {
            document.addEventListener("DOMContentLoaded", bodyOnload);
        }
    }

    registerBodyOnload();

})();