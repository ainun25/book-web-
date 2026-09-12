// Google Books API 보조 기능 (서버 경유, API 키는 브라우저에 노출되지 않습니다)
async function fetchRelatedBooks(query) {
  try {
    const res = await fetch(`/api/books-search?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.items || [];
  } catch (err) {
    console.error("관련 책 검색 실패:", err);
    return [];
  }
}

function renderGoogleBookCard(book) {
  const thumb = book.thumbnail || "";
  return `
    <div class="google-book-card">
      ${thumb ? `<img class="google-book-cover" src="${thumb}" alt="${book.title}" />` : `<div class="google-book-cover placeholder"></div>`}
      <h4 class="google-book-title">${book.title}</h4>
      <p class="google-book-meta">${(book.authors || []).join(", ")}${book.publisher ? " · " + book.publisher : ""}</p>
      <p class="google-book-desc">${(book.description || "").slice(0, 80)}${book.description && book.description.length > 80 ? "..." : ""}</p>
    </div>
  `;
}

async function mountRelatedBooksSection(containerId, query) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `<p class="empty-msg">관련 책을 찾는 중...</p>`;
  const books = await fetchRelatedBooks(query);
  if (books.length === 0) {
    container.innerHTML = `<p class="empty-msg">관련 책을 찾지 못했습니다.</p>`;
    return;
  }
  container.innerHTML = `<div class="google-book-grid">${books.map(renderGoogleBookCard).join("")}</div>`;
}
