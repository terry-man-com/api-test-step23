

// axiosのライブラリを呼び出す。
import axios from "axios";

// axiosのインスタンスを生成し、URLとタイムアウト時間を設置する。
const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
  timeout: 1000,
});

// URL生成とレスポンスの取得
export const requestPokemonData = async (pokeName) => {
  try {
    const response = await instance.get(pokeName);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("データがありません");
  }
};
