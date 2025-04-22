// レスポンスを取得し、必要なデータを取得する。
export const extractPokemonData = (pokemonData) => {
  const id = pokemonData.id;
  const name = pokemonData.name;
  const image = pokemonData.sprites.front_default;
  const types = [];
  pokemonData.types.forEach((typeItem) => {
    types.push(typeItem.type.name);
  });
  return { id, name, image, types };
};

// HTMLを生成する。
export const createPokemonHTML = (data) => {
  const htmlData = `<dl>
          <dt>Name: ${data.name}</dt>
          <dd><img src="${data.image}" alt=""></dd>
          <dd>Id: ${data.id}</dd>
          <dd>Type: ${data.types.join(", ")}</dd>
          <dd><button id="js-cry-button">鳴き声</button></dd>
        </dl>`;
  document.getElementById("js-result").innerHTML = htmlData;
  document.getElementById("js-cry-button").addEventListener("click", () => {
    playCry(data.name);
  });
};

// 鳴き声の取得
export const playCry = (name) => {
  const audio = new Audio(
    `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.ogg`
  );
  audio.onerror = () => {
    alert("鳴き声データがありません。");
  };
  audio.play();
};
