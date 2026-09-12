// 카드뉴스 데이터 - contents.js의 cardnewsId와 연결됩니다.
const CARDNEWS = [
  {
    id: "wihwado-card",
    title: "위화도 회군",
    relatedContentId: "history-wihwado",
    bookId: "history",
    primaryTopic: "choice",
    relatedTopics: ["self", "challenge"],
    images: ["images/cardnews/wihwado-1.jpg", "images/cardnews/wihwado-2.jpg"],
    summary: "다수의 분위기와 다른 내 판단, 무엇을 기준으로 선택할까요?",
    question: "모두가 같은 방향을 향할 때, 나는 무엇을 근거로 다른 선택을 할 수 있을까?"
  },
  {
    id: "myeongnyang-card",
    title: "명량해전",
    relatedContentId: "history-myeongnyang",
    bookId: "history",
    primaryTopic: "challenge",
    relatedTopics: ["emotion", "choice"],
    images: ["images/cardnews/myeongnyang-1.jpg", "images/cardnews/myeongnyang-2.jpg"],
    summary: "모두가 포기하려 할 때, 다시 방법을 찾는 힘은 어디서 올까요?",
    question: "가장 힘든 순간, 나를 다시 움직이게 하는 것은 무엇일까?"
  },
  {
    id: "berlin-wall-card",
    title: "베를린 장벽",
    relatedContentId: "history-berlin-wall",
    bookId: "history",
    primaryTopic: "relationship",
    relatedTopics: ["emotion", "change"],
    images: ["images/cardnews/berlin-wall-1.jpg"],
    summary: "갑작스럽게 멀어진 관계, 연결을 지키는 방법을 생각해봅니다.",
    question: "물리적으로 멀어져도 지킬 수 있는 관계는 무엇일까?"
  },
  {
    id: "ems-telegram-card",
    title: "엠스 전보 사건",
    relatedContentId: "history-ems-telegram",
    bookId: "history",
    primaryTopic: "relationship",
    relatedTopics: ["choice"],
    images: ["images/cardnews/ems-telegram-1.jpg"],
    summary: "작은 말 한마디가 큰 오해와 갈등으로 번지는 과정을 살펴봅니다.",
    question: "오해가 생겼을 때, 나는 무엇을 먼저 확인해야 할까?"
  },
  {
    id: "great-depression-card",
    title: "대공황",
    relatedContentId: "history-great-depression",
    bookId: "history",
    primaryTopic: "change",
    relatedTopics: ["challenge", "emotion"],
    images: ["images/cardnews/great-depression-1.jpg"],
    summary: "모든 것이 무너진 것 같던 시기, 사람들은 어떻게 다시 일어섰을까요?",
    question: "큰 변화 앞에서 내가 지킬 수 있는 것은 무엇일까?"
  },
  {
    id: "luddite-card",
    title: "러다이트 운동",
    relatedContentId: "history-luddite",
    bookId: "history",
    primaryTopic: "change",
    relatedTopics: ["emotion", "choice"],
    images: ["images/cardnews/luddite-1.jpg"],
    summary: "새로운 변화가 두려울 때, 우리는 어떤 선택을 할 수 있을까요?",
    question: "낯선 변화 앞에서 나는 거부와 적응 중 무엇을 먼저 생각할까?"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = CARDNEWS;
}
if (typeof window !== "undefined") {
  window.CARDNEWS = CARDNEWS;
}
