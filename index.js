// express をインポート
const express = require("express");
const path = require("path");

// Express アプリケーションを作成
const app = express();

// 静的ファイルの提供 (public ディレクトリ内のファイル)
app.use(express.static(path.join(__dirname, "public")));

// ルートへの GET リクエストに対するハンドラ
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ポート番号 3000 でサーバーを起動
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
