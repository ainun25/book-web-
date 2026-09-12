require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// public 폴더의 파일들(html, css, js, images)을 그대로 웹에서 볼 수 있게 해줍니다.
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/data", express.static(path.join(__dirname, "data")));

// Google Books API 보조 검색 - API 키는 서버에서만 사용하고 브라우저에는 노출하지 않습니다.
app.get("/api/books-search", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "검색어(q)가 필요합니다." });
  }

  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
  const hasValidKey = apiKey && apiKey !== "your_api_key_here";
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=8${hasValidKey ? `&key=${apiKey}` : ""}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const items = (data.items || []).map((item) => {
      const info = item.volumeInfo || {};
      return {
        title: info.title || "",
        authors: info.authors || [],
        publisher: info.publisher || "",
        description: info.description || "",
        thumbnail: info.imageLinks ? info.imageLinks.thumbnail : ""
      };
    });

    res.json({ items });
  } catch (err) {
    console.error("Google Books API 오류:", err.message);
    res.status(500).json({ error: "책 정보를 불러오지 못했습니다." });
  }
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
