const images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.png",
  "./images/image4.jpg",
  "./images/image5.jpg",
];

document.addEventListener("DOMContentLoaded", () => {
  /*
    badges 와 image_slides 두개의 객체 배열을 선언하고
    각각 span.badge 와 img.image_slides tag 들을 모두 select 하여 저장했다.

    badges 와 image_slides 는 배열이 된다.

    HTML 의 JS 에서 tag 들을 querySelectAll() 을 사용하여
    모두 select 한 결과는 배열이면서 배열이 아니다
    JS 는 이러한 배열을 유사배열이라고 한다.
    성질이 한편으로 배열의 성질을 가지면서, 
    배열과 독특한 성질을 함께 가지고 있다.


  */
  const badges = document.querySelectorAll("span.badge");
  const image_slides = document.querySelectorAll("img.image_slides");

  console.log(image_slides);

  /*
    Object.entries( select객체배열) 함수는 
    배열의 요소와 index 값을 또 다른 배열로 생성한다.
    [
      [index,img],
      [index,img],
      [index,img]
    ]
    이미지가 많을 때 유용
  */
  // for (let [index, img] of Object.entries(image_slides)) {
  //   img.src = images[index];
  // }
  image_slides[0].src = images[0];
  image_slides[1].src = images[1];
  image_slides[2].src = images[2];

  const prev = () => {
    alert("이전");
  };
  const next = () => {
    alert("다음");
  };
  const currentImage = (pos) => {
    alert(`${pos} 번째 이미지`);
  };
  document
    .querySelector("div.controller_box")
    ?.addEventListener("click", (e) => {
      const target = e.target;
      const className = target.classList;
      // alert(className);
      if (className.contains("left")) {
        alert("왼쪽버튼 클릭됨");
      } else if (className.value === "button right") {
        alert("오른쪽 버튼 클릭");
      } else if (className.value === "badge") {
        alert("배지 클릭됨");
      }
    });
});
