const plusbtn = document.querySelectorAll(".fa-plus");
const minusbtn = document.querySelectorAll(".fa-minus");
let number = document.querySelectorAll("[data-number]");

console.log(number);

for (let i = 0; i < plusbtn.length; i++) {
  //   plusbtn[i].id = i;
  plusbtn[i].addEventListener("click", () => {
    number[i].innerHTML = Number(number[i].innerHTML) + 1;
    if (Number(number[i].innerHTML) === 5) {
      plusbtn[i].style.color = "lightgrey";
      return;
    }
  });

  minusbtn[i].addEventListener("click", () => {
    if (Number(number[i].innerHTML) === 1) {
      return;
    }

    number[i].innerHTML = Number(number[i].innerHTML) - 1;
    if (Number(number[i].innerHTML) === 4) {
      plusbtn[i].style.color = "black";
    }
  });
}
