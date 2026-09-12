// 사이트 내부 검색: 책 / 주제 콘텐츠 / 카드뉴스 / 자료
(function () {
  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function textMatch(fields, query) {
    const q = query.toLowerCase();
    return fields.some((field) => {
      if (!field) return false;
      if (Array.isArray(field)) {
        return field.some((f) => String(f).toLowerCase().includes(q));
      }
      return String(field).toLowerCase().includes(q);
    });
  }

  function searchBooks(query) {
    return BOOKS.filter((b) =>
      textMatch([b.title, b.subtitle, b.description, b.bookCategories], query)
    );
  }

  function searchContents(query) {
    return CONTENTS.filter((c) =>
      textMatch(
        [c.subject, c.chapterTitle, c.summary, c.tags, c.primaryTopic, c.relatedTopics, c.contentType, c.bookId],
        query
      )
    );
  }

  function searchCardnews(query) {
    return CARDNEWS.filter((cn) => textMatch([cn.title, cn.summary, cn.primaryTopic], query));
  }

  function searchResources(query) {
    return (typeof RESOURCES !== "undefined" ? RESOURCES : []).filter((r) =>
      textMatch([r.title, r.summary, r.category, r.resourceType], query)
    );
  }

  function bookResultHtml(b) {
    return `<a class="content-card" href="book-detail.html?id=${b.id}">
      <span class="content-card-type">책</span>
      <h3 class="content-card-title">${b.title}</h3>
      <p class="content-card-desc">${b.subtitle}</p>
    </a>`;
  }

  function contentResultHtml(c) {
    const book = BOOKS.find((b) => b.id === c.bookId) || {};
    const typeLabel = c.contentType === "person" ? "사람으로 생각하기" : "역사로 생각하기";
    return `<a class="content-card" href="content-detail.html?id=${c.id}">
      <span class="content-card-type">${typeLabel}</span>
      <h3 class="content-card-title">${c.subject}</h3>
      <p class="content-card-desc">${c.summary}</p>
      <span class="content-card-book">${book.title || ""}</span>
    </a>`;
  }

  function cardnewsResultHtml(cn) {
    return `<a class="content-card" href="cardnews-detail.html?id=${cn.id}">
      <span class="content-card-type">카드뉴스</span>
      <h3 class="content-card-title">${cn.title}</h3>
      <p class="content-card-desc">${cn.summary}</p>
    </a>`;
  }

  function resourceResultHtml(r) {
    return `<div class="content-card">
      <span class="content-card-type">자료실</span>
      <h3 class="content-card-title">${r.title}</h3>
      <p class="content-card-desc">${r.summary}</p>
    </div>`;
  }

  function renderSection(title, items, htmlFn) {
    if (items.length === 0) return "";
    return `
      <section class="section">
        <h2 class="section-title">${title} (${items.length})</h2>
        <div class="card-grid">${items.map(htmlFn).join("")}</div>
      </section>
    `;
  }

  function render() {
    const root = document.getElementById("searchRoot");
    const query = getParam("q") || "";

    if (!query.trim()) {
      root.innerHTML = `<p class="empty-msg">검색어를 입력해 주세요.</p>`;
      return;
    }

    const books = searchBooks(query);
    const contents = searchContents(query);
    const cardnews = searchCardnews(query);
    const resources = searchResources(query);
    const totalCount = books.length + contents.length + cardnews.length + resources.length;

    root.innerHTML = `
      <h1 class="page-title">"${query}" 검색 결과</h1>
      <p class="page-desc">총 ${totalCount}개의 결과를 찾았습니다.</p>
      ${renderSection("책", books, bookResultHtml)}
      ${renderSection("주제 콘텐츠", contents, contentResultHtml)}
      ${renderSection("카드뉴스", cardnews, cardnewsResultHtml)}
      ${renderSection("자료실", resources, resourceResultHtml)}
      ${totalCount === 0 ? "<p class='empty-msg'>검색 결과가 없습니다.</p>" : ""}
    `;
  }

  document.addEventListener("DOMContentLoaded", render);
})();
