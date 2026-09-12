// 자료실 데이터
const RESOURCES = [
  {
    id: "res-parent-guide-1",
    title: "아이와 실패에 대해 이야기하는 대화법",
    category: "parent",
    resourceType: "reading",
    relatedTopics: ["challenge", "emotion"],
    relatedBook: "people",
    summary: "아이가 실패를 경험했을 때 부모가 건넬 수 있는 대화 예시를 소개합니다.",
    source: "책에서 한 걸음 더 편집팀",
    link: ""
  },
  {
    id: "res-teacher-activity-1",
    title: "선택과 판단 수업 활동지",
    category: "teacher",
    resourceType: "activity",
    relatedTopics: ["choice"],
    relatedBook: "history",
    summary: "위화도 회군을 활용한 초등 고학년 대상 토의 활동지입니다.",
    source: "책에서 한 걸음 더 편집팀",
    link: ""
  },
  {
    id: "res-author-reference-1",
    title: "역사 소재 어린이 콘텐츠 기획 참고자료",
    category: "author",
    resourceType: "reference",
    relatedTopics: ["change"],
    relatedBook: "history",
    summary: "역사적 사건을 어린이 눈높이로 재구성할 때 참고할 수 있는 자료 목록입니다.",
    source: "외부 참고자료",
    link: ""
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = RESOURCES;
}
if (typeof window !== "undefined") {
  window.RESOURCES = RESOURCES;
}
