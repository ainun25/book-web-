// 콘텐츠 데이터 - 사람 이야기와 역사 이야기가 동일한 구조를 사용합니다.
// bookCategory / chapterTitle : 책의 실제 목차 체계
// primaryTopic / relatedTopics / tags : 웹사이트 통합 주제 체계 (topics.js)
// 이 두 체계는 서로 다른 목적이므로 절대 섞어서 관리하지 않습니다.
const CONTENTS = [
  // ---------- 이럴 땐 이런 사람 (초기 샘플 4개) ----------
  {
    id: "people-churchill",
    bookId: "people",
    bookCategory: "정서",
    chapterTitle: "실패가 두려워",
    subject: "윈스턴 처칠",
    contentType: "person",
    primaryTopic: "challenge",
    relatedTopics: ["emotion", "self"],
    tags: ["실패", "두려움", "도전", "회복", "자기평가"],
    summary: "실패를 한 번의 결과로 보고 다시 움직이는 힘을 생각합니다.",
    body: "윈스턴 처칠은 학창 시절 성적이 좋지 않았고, 정치 인생에서도 여러 번 큰 실패를 겪었습니다. 하지만 그는 실패를 자신의 전부로 규정하지 않고, 그 순간의 결과로만 받아들였습니다.",
    question: "실패했을 때, 나는 그 실패를 나 자신과 얼마나 동일시하고 있을까?",
    thumbnail: "images/people/churchill.jpg",
    cardnewsId: null,
    purchaseBook: "people"
  },
  {
    id: "people-curie",
    bookId: "people",
    bookCategory: "인지",
    chapterTitle: "나만 이상한 걸까",
    subject: "마리 퀴리",
    contentType: "person",
    primaryTopic: "self",
    relatedTopics: ["challenge"],
    tags: ["자기이해", "비교", "정체성", "끈기"],
    summary: "남들과 다른 길을 걸을 때 나만의 기준을 세우는 법을 생각합니다.",
    thumbnail: "images/people/curie.jpg",
    cardnewsId: null,
    purchaseBook: "people"
  },
  {
    id: "people-mandela",
    bookId: "people",
    bookCategory: "사회",
    chapterTitle: "친구와 멀어질 때",
    subject: "넬슨 만델라",
    contentType: "person",
    primaryTopic: "relationship",
    relatedTopics: ["change"],
    tags: ["관계", "신뢰", "공감", "변화"],
    summary: "오랜 갈등 속에서도 관계를 회복하는 태도를 생각합니다.",
    thumbnail: "images/people/mandela.jpg",
    cardnewsId: null,
    purchaseBook: "people"
  },
  {
    id: "people-jobs",
    bookId: "people",
    bookCategory: "꿈과 미래",
    chapterTitle: "꿈이 흔들릴 때",
    subject: "스티브 잡스",
    contentType: "person",
    primaryTopic: "change",
    relatedTopics: ["challenge", "self"],
    tags: ["꿈", "진로", "성장", "새로운 시작"],
    summary: "실패와 방황 속에서도 자신의 길을 다시 찾는 과정을 생각합니다.",
    thumbnail: "images/people/jobs.jpg",
    cardnewsId: null,
    purchaseBook: "people"
  },

  // ---------- 이럴 땐 이런 역사 (초기 샘플 6개) ----------
  {
    id: "history-wihwado",
    bookId: "history",
    bookCategory: "선택",
    chapterTitle: "이건 아닌 것 같은데",
    subject: "위화도 회군",
    contentType: "history",
    primaryTopic: "choice",
    relatedTopics: ["self", "challenge"],
    tags: ["선택", "판단", "압박", "자기 기준", "용기"],
    summary: "다수의 분위기와 내 판단이 다를 때 무엇을 기준으로 선택할지 생각합니다.",
    body: "이성계는 요동 정벌 명령을 받았지만, 현실적으로 무리한 전쟁이라 판단하고 군대를 돌려 개경으로 향했습니다. 많은 사람이 왕명을 따르던 분위기 속에서, 그는 자신의 판단을 기준으로 다른 선택을 했습니다.",
    question: "모두가 같은 방향을 향할 때, 나는 무엇을 근거로 다른 선택을 할 수 있을까?",
    thumbnail: "images/history/wihwado.jpg",
    cardnewsId: "wihwado-card",
    purchaseBook: "history"
  },
  {
    id: "history-myeongnyang",
    bookId: "history",
    bookCategory: "흔들림",
    chapterTitle: "모두가 포기하려 할 때",
    subject: "명량해전",
    contentType: "history",
    primaryTopic: "challenge",
    relatedTopics: ["emotion", "choice"],
    tags: ["포기", "회복", "자원 찾기", "용기"],
    summary: "절대적으로 불리한 상황에서 포기하지 않고 다시 방법을 찾는 과정을 생각합니다.",
    thumbnail: "images/history/myeongnyang.jpg",
    cardnewsId: "myeongnyang-card",
    purchaseBook: "history"
  },
  {
    id: "history-berlin-wall",
    bookId: "history",
    bookCategory: "관계",
    chapterTitle: "갑자기 멀어진 사이",
    subject: "베를린 장벽",
    contentType: "history",
    primaryTopic: "relationship",
    relatedTopics: ["emotion", "change"],
    tags: ["외로움", "연결", "관계", "경계", "소통"],
    summary: "갑작스럽게 단절된 관계 앞에서 연결을 지키는 방법을 생각합니다.",
    thumbnail: "images/history/berlin-wall.jpg",
    cardnewsId: "berlin-wall-card",
    purchaseBook: "history"
  },
  {
    id: "history-ems-telegram",
    bookId: "history",
    bookCategory: "관계",
    chapterTitle: "오해가 커질 때",
    subject: "엠스 전보 사건",
    contentType: "history",
    primaryTopic: "relationship",
    relatedTopics: ["choice"],
    tags: ["오해", "갈등", "소통", "판단"],
    summary: "작은 말 한마디가 오해와 갈등으로 커지는 과정을 살펴봅니다.",
    thumbnail: "images/history/ems-telegram.jpg",
    cardnewsId: "ems-telegram-card",
    purchaseBook: "history"
  },
  {
    id: "history-great-depression",
    bookId: "history",
    bookCategory: "변화",
    chapterTitle: "모든 게 무너진 것 같을 때",
    subject: "대공황",
    contentType: "history",
    primaryTopic: "change",
    relatedTopics: ["challenge", "emotion"],
    tags: ["변화", "적응", "회복", "다시 시작"],
    summary: "예상치 못한 큰 변화 앞에서 사람들이 다시 일어선 과정을 생각합니다.",
    thumbnail: "images/history/great-depression.jpg",
    cardnewsId: "great-depression-card",
    purchaseBook: "history"
  },
  {
    id: "history-luddite",
    bookId: "history",
    bookCategory: "변화",
    chapterTitle: "새로운 것이 두려울 때",
    subject: "러다이트 운동",
    contentType: "history",
    primaryTopic: "change",
    relatedTopics: ["emotion", "choice"],
    tags: ["변화", "두려움", "적응", "판단"],
    summary: "새로운 변화를 거부하고 싶은 마음과 받아들여야 하는 상황 사이의 고민을 생각합니다.",
    thumbnail: "images/history/luddite.jpg",
    cardnewsId: "luddite-card",
    purchaseBook: "history"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = CONTENTS;
}
if (typeof window !== "undefined") {
  window.CONTENTS = CONTENTS;
}
