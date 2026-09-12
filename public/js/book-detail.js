// 책 상세 페이지 렌더링
(function () {
  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function render() {
    const root = document.getElementById("bookDetailRoot");
    const id = getParam("id");
    const book = BOOKS.find((b) => b.id === id);

    if (!book) {
      root.innerHTML = `<p class="empty-msg">책을 찾을 수 없습니다. <a href="books.html">책 목록으로</a></p>`;
      return;
    }

    const relatedContents = CONTENTS.filter((c) => c.bookId === book.id);
    const relatedCardnews = (typeof CARDNEWS !== "undefined" ? CARDNEWS : [])
      .filter((cn) => relatedContents.some((c) => c.cardnewsId === cn.id));
    const otherBook = BOOKS.find((b) => b.id !== book.id);

    const categoriesHtml = book.bookCategories
      .map((c) => `<span class="tag-chip">${c}</span>`)
      .join("");

    const chaptersHtml = relatedContents
      .map((c) => `
        <li>
          <a href="content-detail.html?id=${c.id}">
            <strong>[${c.bookCategory}]</strong> ${c.chapterTitle} - ${c.subject}
          </a>
        </li>
      `).join("");

    const relatedContentCards = relatedContents.slice(0, 4).map((c) => `
      <a class="content-card" href="content-detail.html?id=${c.id}">
        <h3 class="content-card-title">${c.subject}</h3>
        <p class="content-card-desc">${c.summary}</p>
      </a>
    `).join("");

    const relatedCardnewsCards = relatedCardnews.map((cn) => `
      <a class="content-card" href="cardnews-detail.html?id=${cn.id}">
        <h3 class="content-card-title">${cn.title}</h3>
      </a>
    `).join("") || "<p class='empty-msg'>준비 중입니다.</p>";

    const otherBookHtml = otherBook ? `
      <a class="book-card" href="book-detail.html?id=${otherBook.id}" style="display:block">
        <div class="book-cover-placeholder small">${otherBook.title}</div>
        <h3 class="book-card-title">${otherBook.title}</h3>
        <p class="book-card-sub">${otherBook.subtitle}</p>
      </a>
    ` : "";

    const purchaseLinks = book.purchaseLinks || {};
    const purchaseHtml = ["kyobo", "yes24", "aladin"].map((key) => {
      const labelMap = { kyobo: "교보문고", yes24: "YES24", aladin: "알라딘" };
      const url = purchaseLinks[key];
      if (!url) {
        return `<span class="btn btn-outline disabled">${labelMap[key]} (준비 중)</span>`;
      }
      return `<a class="btn btn-outline" href="${url}" target="_blank" rel="noopener">${labelMap[key]}</a>`;
    }).join("");

    root.innerHTML = `
      <div class="book-detail-header">
        <div class="book-cover-placeholder large">${book.title}</div>
        <div>
          <h1 class="book-detail-title">${book.title}</h1>
          <p class="book-detail-sub">${book.subtitle}</p>
          <p class="book-detail-desc">${book.description}</p>
          <div class="tag-chip-group">${categoriesHtml}</div>
        </div>
      </div>

      <section class="section">
        <h2 class="section-title">주요 챕터</h2>
        <ul class="chapter-list">${chaptersHtml || "<li class='empty-msg'>준비 중</li>"}</ul>
      </section>

      <section class="section">
        <h2 class="section-title">관련 콘텐츠</h2>
        <div class="card-grid">${relatedContentCards || "<p class='empty-msg'>준비 중</p>"}</div>
      </section>

      <section class="section">
        <h2 class="section-title">관련 카드뉴스</h2>
        <div class="card-grid">${relatedCardnewsCards}</div>
      </section>

      ${otherBook ? `
      <section class="section">
        <h2 class="section-title">함께 보면 좋은 다른 책</h2>
        <div class="book-grid">${otherBookHtml}</div>
      </section>` : ""}

      <section class="section">
        <div class="purchase-box">
          <h2 class="section-title">책에서 더 만나보세요</h2>
          <div class="purchase-buttons">${purchaseHtml}</div>
        </div>
      </section>
    `;
  }

  document.addEventListener("DOMContentLoaded", render);
})();
