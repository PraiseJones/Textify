const imgUpload = document.querySelector('#input_img');
const selectbtn = document.querySelector('.default')
const checkbox = document.getElementById("check");
const ddIcon = document.querySelector("#dd-icon");
const closeIcon = document.querySelector("#close-icon");

imgUpload.addEventListener('change', function() {
    const imgName = this.files[0].name;
    var imgg = imgUpload.nextElementSibling;

    imgg.innerHTML = imgName;
})

selectbtn.addEventListener('click', () => {
    const dropDown = document.querySelector('.select');
    dropDown.classList.toggle('active');
})

checkbox.addEventListener("change", () => {
  ddIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

closeIcon.addEventListener("click", () => {
  const height = document.querySelector(".h-full")
  height.classList.remove("h-96");
  height.classList.add("h-0")
});

ddIcon.addEventListener("click", () => {
    const height = document.querySelector(".h-0")
    height.classList.remove("h-0");
    height.classList.add("h-96")
  });
