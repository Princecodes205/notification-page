"use strict";
const markAll = document.querySelector(".markall");
const numberNoti = document.querySelector(".notinum");
const newNoti = document.querySelectorAll(".newnoti");
const redNoti = document.querySelectorAll(".icon");

redNoti.forEach((el) => {
  el.classList.remove("hidden");
});
const addseen = function () {
  numberNoti.textContent = "0";
  newNoti.forEach((el) => {
    el.classList.add("seen");
    el.classList.remove("notified");
  });
  redNoti.forEach((el) => {
    el.classList.add("hidden");
  });
};

markAll.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("checked");
  addseen();
});
