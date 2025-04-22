import {requestPokemonData} from "./my-modules/HTTPRequest";
import {extractPokemonData, createPokemonHTML, playCry} from "./my-modules/createPokemonData";


// 読み込み時の注意アラート
addEventListener("load", () => {
  alert("検索すると音が鳴ります。");
})

const getInputName = (e) => {
  const form = new FormData(e.target); // フォームの生成
  const pokeName = form.get("pokeName").toLowerCase();
  if (!pokeName) {
    alert("ポケモン名を入力してください。");
    return;
  }
  return pokeName;
}

const submitHandler = async (e) => {
  e.preventDefault(); // フォームをとめる。
  const pokeName = getInputName(e)
  const pokemonData = await requestPokemonData(pokeName);
  const extractData = extractPokemonData(pokemonData);
  createPokemonHTML(extractData);
  playCry(extractData.name);
};

document.getElementById("js-form").addEventListener("submit", (e) => submitHandler(e));