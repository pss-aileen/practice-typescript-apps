/*
- 開発者用のトークンをenvにセット
- ページを表示するたびにアクセストークンをリクエスト
- 1時間保存できるので、入手したらlocalStorgeに保存
- そのトークンを使ってデータを取得
- 表示

すること
- .envの設定方法
- トークンの一時保存
- 

*/

console.log(import.meta.env.VITE_SPOTIFY_CLIENT_ID);



const token = "Bearer " + import.meta.env.VITE_ONE_HOUR_TOKEN;


fetch("https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
  {
    method: "GET",
    headers: {
      "Authorization": token
    }
  }
)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then(console.log);

  fetch("https://api.spotify.com/v1/playlists/2YPMT7pNvKbek4sIGyiGeA",
    {
      method: "GET",
      headers: {
        "Authorization": token
      }
    }
  )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then(console.log);