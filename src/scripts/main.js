// axiosのライブラリを呼び出す。
import axios from 'axios';

// axiosのインスタンスを生成し、URLとタイムアウト時間を設置する。
const instance = axios.create({
  baseURL : "https://pokeapi.co/api/v2/pokemon/",
  timeout : 1000,
});

// URL生成とレスポンスの取得
const requestPokemonData = async (pokeName) => {
  try{
    const response = await instance.get(pokeName);
    return response.data;
  } catch (error) {
    console.error("エラーが起きました:", error);
    alert("データがありません");
  }};

// レスポンスを取得し、必要なデータを取得する。
const extractPokemonData = (pokemonData) => {
  const id = pokemonData.id;
  const name = pokemonData.name;
  const image = pokemonData.sprites.front_default;
  const types = [];
  pokemonData.types.forEach (typeItem =>
    types.push(typeItem.type.name)
  );
  return {id, name, image, types};
};

// HTMLを生成する。
const createPokemonHTML = (data) => {
  const htmlData = `<dl>
          <dt>Name: ${data.name}</dt>
          <dd><img src="${data.image}" alt=""></dd>
          <dd>Id: ${data.id}</dd>
          <dd>Type: ${data.types.join(", ")}</dd>
          <dd><button id="js-cry-button">鳴き声</button></dd>
        </dl>`
  document.getElementById("js-result").innerHTML = htmlData;
  document.getElementById("js-cry-button").addEventListener("click", () => {
    playCry(data.name);
  })
}

// 鳴き声の生成
const playCry = (name) => {
  const audio = new Audio(`https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.ogg`);
  audio.play();
};

const submitHandler = async(e) => {
  e.preventDefault(); // フォームをとめる。
  // フォームを生成
  const form = new FormData(e.target);
  const pokeName = form.get("pokeName").toLowerCase();
  const pokemonData = await requestPokemonData(pokeName);
  const extractData = extractPokemonData(pokemonData);
  createPokemonHTML(extractData);
  playCry(extractData.name);
  console.log(extractData.id);
  console.log(extractData.name);
  console.log(extractData.image);
  console.log(extractData.types);
  console.log("入力された名前：",pokeName);
};

document.getElementById("js-form").addEventListener("submit", (e) => submitHandler(e));