// 책 표지 이미지를 표시하는 공통 함수
// 실제 이미지 파일이 없으면 자동으로 제목이 적힌 placeholder를 보여줍니다.
// 이미지를 추가하려면 images/books/ 폴더에 파일을 넣고 data/books.js의 cover 경로와 이름을 맞추면 됩니다.
function bookCoverHtml(book, extraClass) {
  const cls = extraClass || "";
  return `
    <div class="book-cover-wrap ${cls}">
      <img
        class="book-cover-img"
        src="/${book.cover}"
        alt="${book.title}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="book-cover-fallback">${book.title}</div>
    </div>
  `;
}
