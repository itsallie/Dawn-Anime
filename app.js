var year = 2021;
var season = 'summer';


document.getElementById('year').addEventListener('change', setYear);


function setYear() {
    year = document.getElementById('year').value
    showContent();
}

function setSeason(seas) {
    season = seas;
    showContent();
}

function showContent() {
    fetch(`https://api.jikan.moe/v3/season/${year}/${season}`)
        .then(response => response.json())
        .then(data => displayData(data))
}

function displayData(data) {
    document.getElementById("anime").innerHTML = ""

    for (let i = 0; i < 20; i++) {
        animeTitle = data.anime[i].title
        animeImg = data.anime[i].image_url
        animeSynopsis = data.anime[i].synopsis
        animeURL = data.anime[i].url

        document.getElementById("anime").innerHTML += `
                    <div class="anime-item">
                        <div class="anime-img">
                            <img class="img-fluid" src="${animeImg}">
                    </div>
                    <div class="anime-title">
                        <h3>${animeTitle}</h3>
                        <a href="${animeURL}" class="synopsis-btn">About</a>
                    </div>`;

    }
    console.log(data)
}

showContent();