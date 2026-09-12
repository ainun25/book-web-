// 책 데이터 - 실제 책의 목차 구조(bookCategories, chapters)를 그대로 담습니다.
// 웹사이트 통합 주제(topics.js)와는 별개의 체계입니다. 절대 섞지 마세요.
const BOOKS = [
  {
    id: "people",
    title: "이럴 땐 이런 사람",
    subtitle: "인물의 경험과 선택을 통해 내 마음과 삶을 생각합니다.",
    description:
      "초등 고학년~중학생이 생활 속 고민을 만났을 때, 역사적·현대적 인물의 경험과 생각을 통해 자신의 감정, 생각, 관계, 꿈을 돌아보는 책입니다.",
    cover: "images/books/people.jpg",
    contentType: "person",
    bookCategories: ["정서", "인지", "사회", "꿈과 미래"],
    purchaseLinks: {
      kyobo: "https://product.kyobobook.co.kr/detail/S000217555416",
      yes24: "",
      aladin: ""
    }
  },
  {
    id: "history",
    title: "이럴 땐 이런 역사",
    subtitle: "역사 속 결정적 순간을 통해 오늘의 감정과 선택을 생각합니다.",
    description:
      "초등 고학년~중학생이 역사 속 결정적인 순간을 통해 사람들의 감정과 선택, 관계, 변화의 과정을 살펴보고 오늘의 나와 연결해 생각하는 책입니다.",
    cover: "images/books/history.jpg",
    contentType: "history",
    bookCategories: ["선택", "흔들림", "관계", "변화"],
    purchaseLinks: {
      kyobo: "https://product.kyobobook.co.kr/detail/S000221048734",
      yes24: "",
      aladin: ""
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = BOOKS;
}
if (typeof window !== "undefined") {
  window.BOOKS = BOOKS;
}
