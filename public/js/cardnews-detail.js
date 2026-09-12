// 카드뉴스 상세 페이지
(function () {
  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function render() {
    const root = document.getElementById("cardnewsDetailRoot");
    const id = getParam("id");
    const cn = CARDNEWS.find((c) => c.id === id);

    if (!cn) {
      root.innerHTML = `<p class="empty-msg">카드뉴스를 찾을 수 없습니다. <a href="cardnews.html">카드뉴스 목록으로</a></p>`;
      return;
    }

    const related = CONTENTS.find((c) => c.id === cn.relatedContentId);
    const book = BOOKS.find((b) => b.id === cn.bookId) || {};

    const imagesHtml = (cn.images || [])
      .map((src) => `<div class="cardnews-detail-img" style="background-image:url('${src}')"></div>`)
      .join("");

    const relatedTopicContents = CONTENTS
      .filter((c) => c.id !== cn.relatedContentId && c.primaryTopic === cn.primaryTopic)
      .slice(0, 3);
    const relatedHtml = relatedTopicContents.map((c) => `
      <a class="content-card" href="content-detail.html?id=${c.id}">
        <h3 class="content-card-title">${c.subject}</h3>
        <p class="content-card-desc">${c.summary}</p>
      </a>
    `).join("") || "<p class='empty-msg'>준비 중입니다.</p>";

    root.innerHTML = `
      <div class="content-detail-header">
        <span class="content-card-type">카드뉴스</span>
        <h1 class="content-detail-title">${cn.title}</h1>
        <p class="content-detail-sub">${related ? related.subject : ""} · ${book.title || ""}</p>
        <p class="content-detail-summary">${cn.summary}</p>
      </div>

      <div class="cardnews-detail-images">${imagesHtml}</div>

      <section class="section">
        <div class="question-banner">
          <p class="question-text">"${cn.question}"</p>
        </div>
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
    `;
  }

  document.addEventListener("DOMContentLoaded", render);
})();
