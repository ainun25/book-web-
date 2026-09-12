// 웹사이트 통합 상위 주제 6개 (책의 실제 목차와는 별개의 체계입니다)
const TOPICS = [
  {
    id: "emotion",
    title: "마음과 감정",
    description: "마음이 흔들리는 순간을 이해합니다.",
    tags: ["불안", "두려움", "화", "억울함", "외로움", "좌절", "스트레스", "소진", "자신감", "감정조절"]
  },
  {
    id: "self",
    title: "나를 이해하기",
    description: "내 생각과 강점, 나다운 기준을 발견합니다.",
    tags: ["자기이해", "강점", "자존감", "생각", "가치", "정체성", "비교", "자기평가", "통제감", "나만의 기준"]
  },
  {
    id: "relationship",
    title: "관계와 소통",
    description: "사람 사이의 거리와 마음을 살펴봅니다.",
    tags: ["친구", "외로움", "갈등", "오해", "소통", "배신", "신뢰", "공감", "경계", "목소리 내기"]
  },
  {
    id: "choice",
    title: "선택과 판단",
    description: "무엇을 기준으로 결정할지 생각합니다.",
    tags: ["선택", "판단", "갈등", "압박", "책임", "정보", "기준", "다수의 의견", "결정", "결과"]
  },
  {
    id: "challenge",
    title: "도전과 회복",
    description: "어려움 뒤에 다시 움직이는 힘을 찾습니다.",
    tags: ["실패", "도전", "용기", "포기", "끈기", "회복", "다시 시작", "도움 요청", "자원 찾기", "작은 행동"]
  },
  {
    id: "change",
    title: "변화와 미래",
    description: "변화 속에서 새로운 길을 찾아봅니다.",
    tags: ["변화", "적응", "새로운 시작", "꿈", "진로", "목표", "미래", "성장", "사회 변화", "내가 바꿀 수 있는 것"]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = TOPICS;
}
if (typeof window !== "undefined") {
  window.TOPICS = TOPICS;
}
