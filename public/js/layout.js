// 모든 페이지에서 공통으로 쓰는 헤더/푸터를 만들어서 삽입합니다.
// 사이트 이름을 바꾸려면 data/siteConfig.js 의 siteName 값만 수정하면 이 헤더에도 반영됩니다.
(function () {
  const SITE_NAME = window.SITE_CONFIG ? window.SITE_CONFIG.siteName : "책에서 한 걸음 더";

  const MENU_ITEMS = [
    { label: "홈", href: "index.html" },
    { label: "주제로 찾기", href: "topics.html" },
    { label: "책", href: "books.html" },
    { label: "카드뉴스", href: "cardnews.html" },
    { label: "자료실", href: "resources.html" },
    { label: "About", href: "about.html" }
  ];

  function currentFile() {
    const path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function renderHeader() {
    const current = currentFile();
    const menuHtml = MENU_ITEMS.map((item) => {
      const activeClass = item.href === current ? " active" : "";
      return `<li><a class="nav-link${activeClass}" href="${item.href}">${item.label}</a></li>`;
    }).join("");

    return `
      <header class="site-header">
        <div class="header-inner">
          <a class="site-logo" href="index.html">${SITE_NAME}</a>
          <button class="menu-toggle" id="menuToggle" aria-label="메뉴 열기">☰</button>
          <nav class="site-nav" id="siteNav">
            <ul class="nav-list">${menuHtml}</ul>
          </nav>
          <div class="header-search">
            <input type="text" id="headerSearchInput" placeholder="검색어를 입력하세요" />
            <button id="headerSearchBtn" aria-label="검색">🔍</button>
          </div>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    return `
      <footer class="site-footer">
        <div class="footer-inner">
          <p class="footer-site-name">${SITE_NAME}</p>
          <p class="footer-desc">사람과 역사 이야기를 통해 마음, 관계, 선택, 변화를 함께 생각합니다.</p>
          <p class="footer-copy">&copy; ${new Date().getFullYear()} ${SITE_NAME}</p>
        </div>
      </footer>
    `;
  }

  function mountLayout() {
    const headerMount = document.getElementById("siteHeader");
    const footerMount = document.getElementById("siteFooter");
    if (headerMount) headerMount.innerHTML = renderHeader();
    if (footerMount) footerMount.innerHTML = renderFooter();

    const menuToggle = document.getElementById("menuToggle");
    const siteNav = document.getElementById("siteNav");
    if (menuToggle && siteNav) {
      menuToggle.addEventListener("click", () => {
        siteNav.classList.toggle("open");
      });
    }

    const searchBtn = document.getElementById("headerSearchBtn");
    const searchInput = document.getElementById("headerSearchInput");
    function goSearch() {
      const q = searchInput.value.trim();
      if (q.length > 0) {
        window.location.href = `search.html?q=${encodeURIComponent(q)}`;
      }
    }
    if (searchBtn) searchBtn.addEventListener("click", goSearch);
    if (searchInput) {
      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") goSearch();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", mountLayout);
})();
