document.addEventListener("DOMContentLoaded", () => {
  const nav_ul = document.querySelector("nav ul");
  // document.querySelector(
  //   "li#home".addEventListener("click", () => {
  //     alert("HOME");
  //   })
  // );
  const nav_click = (event) => {
    const target = event.target;
    const nav_text = target.innerText;
    if (nav_text === "HOME") {
      document.location.href = "./index.html";
    } else if (nav_text === "거래처") {
      document.location.href = "./background.html";
    } else if (nav_text === "상품") {
      document.location.href = "./background2.html";
    } else if (nav_text === "로그아웃") {
      alert("로그아웃으로 가기");
    } else if (nav_text === "관리자") {
      document.location.href = "https://naver.com";
    }
  };
  // nav_ul.onClick = nav_click;
  /*
  if (nav_ul) {
    nav_ul.addEventListener("click", nav_click);
  }
  */
  // null safe 코드
  // nav_ul 객체 변수가 null 이 아닐 경우에만 add ....() 함수를 실행하라
  // null 이면 무시하라
  nav_ul?.addEventListener("click", nav_click);
});
