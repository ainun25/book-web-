// 홈 화면 렌더링 (4단계: 정적 데이터만 사용, API 없음)
(function () {
  function renderTopicGrid() {
    const grid = document.getElementById("topicGrid");
    if (!grid || typeof TOPICS === "undefined") return;

    const contents = typeof CONTENTS !== "undefined" ? CONTENTS : [];

    grid.innerHTML = TOPICS.map((topic) => {
      const count = contents.filter((c) => c.primaryTopic === topic.id).length;
      return `
        <a class="topic-card" href="topic-detail.html?id=${topic.id}">
          <h3 class="topic-card-title">${topic.title}</h3>
          <p class="topic-card-desc">${topic.description}</p>
          <span class="topic-card-count">관련 콘텐츠 ${count}개</span>
        </a>
      `;
    }).join("");
  }

  function contentCardHtml(item) {
    const typeLabel = item.contentType === "person" ? "사람으로 생각하기" : "역사로 생각하기";
    const bookTitle = typeof BOOKS !== "undefined"
      ? (BOOKS.find((b) => b.id === item.bookId) || {}).title || ""
      : "";
    return `
      <a class="content-card" href="content-detail.html?id=${item.id}">
        <span class="content-card-type">${typeLabel}</span>
        <h3 class="content-card-title">${item.subject}</h3>
        <p class="content-card-desc">${item.summary}</p>
        <div class="content-card-tags">${item.tags.slice(0, 3).map((t) => `#${t}`).join(" ")}</div>
        <span class="content-card-book">${bookTitle}</span>
      </a>
    `;
  }

  function renderFeatured() {
    const grid = document.getElementById("featuredGrid");
    if (!grid) return;
    const contents = typeof CONTENTS !== "undefined" ? CONTENTS : [];
    if (contents.length === 0) {
      grid.innerHTML = `<p class="empty-msg">콘텐츠는 5~7단계에서 채워집니다.</p>`;
      return;
    }
    const featured = contents.slice(0, 6);
    grid.innerHTML = featured.map(contentCardHtml).join("");
  }

  function renderBooks() {
    const grid = document.getElementById("bookGrid");
    if (!grid) return;
    if (typeof BOOKS === "undefined" || BOOKS.length === 0) {
      grid.innerHTML = `<p class="empty-msg">책 데이터는 5단계에서 등록됩니다.</p>`;
      return;
    }
    grid.innerHTML = BOOKS.map((book) => `
      <div class="book-card">
        <div class="book-cover-placeholder small">${book.title}</div>
        <h3 class="book-card-title">${book.title}</h3>
        <p class="book-card-sub">${book.subtitle || ""}</p>
        <a class="btn btn-outline" href="book-detail.html?id=${book.id}">책 자세히 보기</a>
      </div>
    `).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderTopicGrid();
    renderFeatured();
    renderBooks();
  });
})();
