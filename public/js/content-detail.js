// 콘텐츠 상세 페이지 렌더링 (사람 이야기 / 역사 이야기 공통 구조)
(function () {
  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function render() {
    const root = document.getElementById("contentDetailRoot");
    const id = getParam("id");
    const item = CONTENTS.find((c) => c.id === id);

    if (!item) {
      root.innerHTML = `<p class="empty-msg">콘텐츠를 찾을 수 없습니다. <a href="topics.html">주제로 찾기</a></p>`;
      return;
    }

    const book = BOOKS.find((b) => b.id === item.bookId) || {};
    const typeLabel = item.contentType === "person" ? "사람으로 생각하기" : "역사로 생각하기";
    const tagsHtml = item.tags.map((t) => `<span class="tag-chip">#${t}</span>`).join("");

    const cardnews = (typeof CARDNEWS !== "undefined" ? CARDNEWS : []).find((cn) => cn.id === item.cardnewsId);
    const cardnewsHtml = cardnews
      ? `<a class="content-card" href="cardnews-detail.html?id=${cardnews.id}"><h3 class="content-card-title">${cardnews.title}</h3></a>`
      : `<p class="empty-msg">준비 중입니다.</p>`;

    const relatedContents = CONTENTS
      .filter((c) => c.id !== item.id && c.primaryTopic === item.primaryTopic)
      .slice(0, 3);
    const relatedHtml = relatedContents.map((c) => `
      <a class="content-card" href="content-detail.html?id=${c.id}">
        <span class="content-card-type">${c.contentType === "person" ? "사람으로 생각하기" : "역사로 생각하기"}</span>
        <h3 class="content-card-title">${c.subject}</h3>
        <p class="content-card-desc">${c.summary}</p>
      </a>
    `).join("") || "<p class='empty-msg'>준비 중입니다.</p>";

    const bodyText = item.body || item.summary;
    const questionText = item.question || `${item.subject}의 이야기를 보며, 나라면 어떤 선택을 했을지 생각해 봅니다.`;

    root.innerHTML = `
      <div class="content-detail-header">
        <span class="content-card-type">${typeLabel}</span>
        <h1 class="content-detail-title">${item.subject}</h1>
        <p class="content-detail-sub">${item.chapterTitle} · ${book.title || ""}</p>
        <p class="content-detail-summary">${item.summary}</p>
        <div class="tag-chip-group">${tagsHtml}</div>
      </div>

      <section class="section">
        <h2 class="section-title">이야기</h2>
        <p class="content-detail-body">${bodyText}</p>
      </section>

      <section class="section">
        <div class="question-banner">
          <p class="question-text">"${questionText}"</p>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">관련 카드뉴스</h2>
        <div class="card-grid">${cardnewsHtml}</div>
      </section>

      <section class="section">
        <h2 class="section-title">관련 콘텐츠</h2>
        <div class="card-grid">${relatedHtml}</div>
      </section>

      <section class="section">
        <div class="purchase-box">
          <h2 class="section-title">책에서 더 읽어보기</h2>
          <p class="page-desc">${book.title || ""}</p>
          <a class="btn btn-primary" href="book-detail.html?id=${book.id}">책 자세히 보기</a>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">관련 책 더 찾아보기</h2>
        <div id="googleBooksResult"></div>
      </section>
    `;

    if (typeof mountRelatedBooksSection === "function") {
      const keyword = [item.subject, item.tags[0]].filter(Boolean).join(" ");
      mountRelatedBooksSection("googleBooksResult", keyword);
    }
  }

  document.addEventListener("DOMContentLoaded", render);
})();
