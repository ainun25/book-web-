// 카드뉴스 목록 페이지: 이미지 그리드 + 검색 + 주제 필터
(function () {
  let currentTopic = "all";
  let currentQuery = "";

  function cardHtml(cn) {
    const book = BOOKS.find((b) => b.id === cn.bookId) || {};
    const topic = TOPICS.find((t) => t.id === cn.primaryTopic) || {};
    const img = (cn.images && cn.images[0]) || "images/thumbnails/placeholder.jpg";
    return `
      <a class="cardnews-item" href="cardnews-detail.html?id=${cn.id}">
        <div class="cardnews-thumb" style="background-image:url('${img}')"></div>
        <div class="cardnews-item-body">
          <h3 class="cardnews-item-title">${cn.title}</h3>
          <p class="cardnews-item-topic">${topic.title || ""}</p>
          <p class="cardnews-item-book">${book.title || ""}</p>
        </div>
      </a>
    `;
  }

  function renderGrid() {
    const grid = document.getElementById("cardnewsGrid");
    const filtered = CARDNEWS.filter((cn) => {
      const matchTopic = currentTopic === "all" || cn.primaryTopic === currentTopic;
      const matchQuery = cn.title.toLowerCase().includes(currentQuery.toLowerCase());
      return matchTopic && matchQuery;
    });
    grid.innerHTML = filtered.map(cardHtml).join("") || "<p class='empty-msg'>검색 결과가 없습니다.</p>";
  }

  function renderFilterBar() {
    const bar = document.getElementById("topicFilterBar");
    const topicButtons = TOPICS.map((t) => `<button class="filter-btn" data-topic="${t.id}">${t.title}</button>`).join("");
    bar.innerHTML = `<button class="filter-btn active" data-topic="all">전체</button>${topicButtons}`;

    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentTopic = btn.dataset.topic;
      renderGrid();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderFilterBar();
    renderGrid();

    document.getElementById("cardnewsSearch").addEventListener("input", (e) => {
      currentQuery = e.target.value;
      renderGrid();
    });
  });
})();
