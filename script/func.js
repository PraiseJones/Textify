const imgUpload = document.querySelector('#input_img');

imgUpload.addEventListener('change', function() {
    const imgName = this.files[0].name;
    var imgg = imgUpload.nextElementSibling;

    imgg.innerHTML = imgName;
})