document.addEventListener("DOMContentLoaded", () => {
  /* 
    dept_main 에서 입력하는 요소 중에서
    거래처코드, 거래처명, 대표전화, 담당자명, 담당자연락처는
    반드시 입력해야 하는 요소이다.

    각 요소를 입력하지 않고 저장을 할 경우
    alert 경고를 띄우고, 값을 입력하도록 하는 front validation(유효성 검사)를 실행하시오
  */
  const dept_form = document.querySelector(".dept form");
  const d_code = dept_form.querySelector("#d_code");
  const d_name = dept_form.querySelector("#d_name");
  const d_tel = dept_form.querySelector("#d_tel");
  const d_ceo = dept_form.querySelector("#d_ceo");
  const d_addr = dept_form.querySelector("#d_addr");
  const d_manager = dept_form.querySelector("#d_manager");
  const d_mantel = dept_form.querySelector("#d_mantel");

  const save_button = dept_form.querySelector(
    ".button_box div button:nth-of-type(1)"
  );
  save_button.addEventListener("click", () => {
    const dCodeText = d_code.value;
    const dNameText = d_name.value;
    const dTelText = d_tel.value;
    // const dCeoText = d_ceo.value;
    // const dAddrText = d_addr.value;
    const dManagerText = d_manager.value;
    const dmantelText = d_mantel.value;
    if (!dCodeText) {
      alert("거래처코드를 입력 하세요");
      d_code.focus();
      return false;
    }
    if (!dNameText) {
      alert("거래처명을 입력 하세요");
      d_name.focus();
      return false;
    }
    if (!dTelText) {
      alert("대표전화를 입력 하세요");
      d_tel.focus();
      return false;
    }
    if (!dManagerText) {
      alert("담당자명을 입력 하세요");
      d_manager.focus();
      return false;
    }
    if (!dmantelText) {
      alert("담당자연락처를 입력 하세요");
      d_mantel.focus();
      return false;
    }
    dept_form.submit();
  });
});
