// 사이트 이름 등 전체 설정 - 여기 값만 바꾸면 사이트 곳곳에 반영됩니다.
const SITE_CONFIG = {
  siteName: "책에서 한 걸음 더",
  siteDescription: "사람과 역사 이야기를 통해 마음, 관계, 선택, 변화를 함께 생각하는 책 기반 콘텐츠 아카이브"
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
