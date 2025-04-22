# api-test-step23
step23 PokeAPI

## 基本機能

このアプリケーションは、[PokeAPI](https://pokeapi.co/) を使用して、ポケモンに関する情報を検索・表示できるWebアプリです。

### 実装されている主な機能

- ポケモン名（英語）をフォームに入力して検索
- 入力された名前に基づいてPokeAPIから情報を取得
- ポケモンの以下の情報を表示
  - 名前
  - ID
  - タイプ（複数可）
  - 画像（正面）
- ポケモン情報表示時に鳴き声が鳴るようにして、ポケモン図鑑風のアレンジを加えています。
- 鳴き声再生ボタン
  - ボタンを押すと、該当ポケモンの鳴き声（.ogg音声）を再生
  - 対応する音声が存在しない場合はアラートを表示
- フォーム入力が空欄の場合は警告アラートを表示

### アレンジ
- ポケモン情報表示時に鳴き声が鳴る
    ```javascript
        export const playCry = (name) => {
            const audio = new Audio(
                `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.ogg`
            );
        audio.onerror = () => {
            alert("鳴き声データがありません。");
        };
        audio.play();
        };
    ```
PokeAPIには鳴き声データがないので、上記の関数でPokemonSHOWDOWNからnameに対応した音声データを取得して、再生しています。