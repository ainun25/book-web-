// 자료실 목록 페이지
(function () {
  let currentCategory = "all";

  const CATEGORY_LABEL = { parent: "부모용", teacher: "교사용", author: "저자·기획자용" };
  const TYPE_LABEL = { activity: "활동지", reading: "읽을거리", reference: "참고자료" };

  function cardHtml(res) {
    const book = BOOKS.find((b) => b.id === res.relatedBook) || {};
    return `
      <div class="content-card resource-card">
        <span class="content-card-type">${CATEGORY_LABEL[res.category]} · ${TYPE_LABEL[res.resourceType]}</span>
        <h3 class="content-card-title">${res.title}</h3>
        <p class="content-card-desc">${res.summary}</p>
        <p class="content-card-book">${book.title || ""} · 출처: ${res.source}</p>
        ${res.link ? `<a class="btn btn-outline" href="${res.link}" target="_blank" rel="noopener">자료 보기</a>` : `<span class="btn btn-outline disabled">준비 중</span>`}
      </div>
    `;
  }

  function renderGrid() {
    const grid = document.getElementById("resourceGrid");
    const filtered = RESOURCES.filter((r) => currentCategory === "all" || r.category === currentCategory);
    grid.innerHTML = filtered.map(cardHtml).join("") || "<p class='empty-msg'>준비 중입니다.</p>";
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderGrid();
    document.getElementById("categoryFilterBar").addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      document.querySelectorAll("#categoryFilterBar .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderGrid();
    });
  });
})();
