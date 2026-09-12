// 책 목록 페이지: 실제 책 목차(bookCategories + chapters) 그대로 렌더링
(function () {
  function renderBookSection(book) {
    const container = document.getElementById(book.id);
    if (!container) return;

    const categoriesHtml = book.bookCategories.map((category) => {
      const chapters = CONTENTS.filter(
        (c) => c.bookId === book.id && c.bookCategory === category
      );
      const chapterList = chapters
        .map((c) => `<li><a href="content-detail.html?id=${c.id}">${c.chapterTitle} - ${c.subject}</a></li>`)
        .join("");
      return `
        <div class="book-category-block">
          <h3 class="book-category-title">${category}</h3>
          <ul class="chapter-list">${chapterList || "<li class='empty-msg'>준비 중</li>"}</ul>
        </div>
      `;
    }).join("");

    container.innerHTML = `
      <div class="book-section-header">
        <div class="book-cover-placeholder">${book.title}</div>
        <div>
          <h2 class="book-section-title">${book.title}</h2>
          <p class="book-section-sub">${book.subtitle}</p>
          <a class="btn btn-primary" href="book-detail.html?id=${book.id}">책 자세히 보기</a>
        </div>
      </div>
      <div class="book-category-grid">${categoriesHtml}</div>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (typeof BOOKS === "undefined") return;
    BOOKS.forEach(renderBookSection);
  });
})();
