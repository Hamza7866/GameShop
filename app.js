const container = document.querySelector(".container");
const apiKey = "https://api.rawg.io/api/games";

const getGame = async () => {
  try {
    const res = await fetch(apiKey);
    const jsonData = await res.json();
    console.log(jsonData.results);
    let htmlDiv = "";
    jsonData.results.map((game) => {
      console.log(game);

      let gameHtml = `
    <div class="card" >
  <img src=${game.background_image} class="card-img" alt="...">
  <div>
    <h3>${game.name}</h3>
    <p>Released Date: ${game.released}</p>
    <p>User Rating: ${game.rating}</p>
    <a href=${game.clip.clip} target="_blank">Game Trailer</a>
  </div>
</div>
    
    `;
      htmlDiv += gameHtml;
    });
    container.innerHTML = htmlDiv;
  } catch (error) {
    console.log(error);
  }
};

getGame();
