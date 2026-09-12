// 주제로 찾기 목록 페이지
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("topicGrid");
    if (!grid || typeof TOPICS === "undefined") return;

    grid.innerHTML = TOPICS.map((topic) => {
      const count = CONTENTS.filter((c) => c.primaryTopic === topic.id).length;
      return `
        <a class="topic-card" href="topic-detail.html?id=${topic.id}">
          <h3 class="topic-card-title">${topic.title}</h3>
          <p class="topic-card-desc">${topic.description}</p>
          <span class="topic-card-count">관련 콘텐츠 ${count}개</span>
        </a>
      `;
    }).join("");
  });
})();
