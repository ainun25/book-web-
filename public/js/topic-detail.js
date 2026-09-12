// 주제 상세 페이지: 사람/역사 콘텐츠를 함께 보여주고 필터링합니다.
(function () {
  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function contentCardHtml(item) {
    const typeLabel = item.contentType === "person" ? "사람으로 생각하기" : "역사로 생각하기";
    const book = BOOKS.find((b) => b.id === item.bookId) || {};
    return `
      <a class="content-card" href="content-detail.html?id=${item.id}">
        <span class="content-card-type">${typeLabel}</span>
        <h3 class="content-card-title">${item.subject}</h3>
        <p class="content-card-desc">${item.summary}</p>
        <div class="content-card-tags">${item.tags.slice(0, 3).map((t) => `#${t}`).join(" ")}</div>
        <span class="content-card-book">${book.title || ""}</span>
      </a>
    `;
  }

  function cardnewsCardHtml(cn) {
    return `
      <a class="content-card" href="cardnews-detail.html?id=${cn.id}">
        <span class="content-card-type">카드뉴스</span>
        <h3 class="content-card-title">${cn.title}</h3>
      </a>
    `;
  }

  let currentFilter = "all";
  let topic, relatedContents, relatedCardnews;

  function renderList() {
    const listEl = document.getElementById("topicContentList");
    let html = "";

    if (currentFilter === "all" || currentFilter === "person") {
      html += relatedContents.filter((c) => c.contentType === "person").map(contentCardHtml).join("");
    }
    if (currentFilter === "all" || currentFilter === "history") {
      html += relatedContents.filter((c) => c.contentType === "history").map(contentCardHtml).join("");
    }
    if (currentFilter === "all" || currentFilter === "cardnews") {
      html += relatedCardnews.map(cardnewsCardHtml).join("");
    }

    listEl.innerHTML = html || "<p class='empty-msg'>아직 등록된 콘텐츠가 없습니다.</p>";
  }

  function render() {
    const root = document.getElementById("topicDetailRoot");
    const id = getParam("id");
    topic = TOPICS.find((t) => t.id === id);

    if (!topic) {
      root.innerHTML = `<p class="empty-msg">주제를 찾을 수 없습니다. <a href="topics.html">주제 목록으로</a></p>`;
      return;
    }

    relatedContents = CONTENTS.filter(
      (c) => c.primaryTopic === topic.id || (c.relatedTopics || []).includes(topic.id)
    );
    relatedCardnews = (typeof CARDNEWS !== "undefined" ? CARDNEWS : []).filter(
      (cn) => (cn.relatedTopics || []).includes(topic.id) || cn.primaryTopic === topic.id
    );

    root.innerHTML = `
      <div class="topic-detail-header">
        <h1 class="page-title">${topic.title}</h1>
        <p class="page-desc">${topic.description}</p>
      </div>

      <div class="filter-bar" id="filterBar">
        <button class="filter-btn active" data-filter="all">전체</button>
        <button class="filter-btn" data-filter="person">사람 이야기</button>
        <button class="filter-btn" data-filter="history">역사 이야기</button>
        <button class="filter-btn" data-filter="cardnews">카드뉴스</button>
        <button class="filter-btn" data-filter="activity">활동</button>
      </div>

      <div class="card-grid" id="topicContentList"></div>
    `;

    renderList();

    document.getElementById("filterBar").addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderList();
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();
