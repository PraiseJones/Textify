const imgUpload = document.querySelector('#input_img');
const selectbtn = document.querySelector('.default')

imgUpload.addEventListener('change', function() {
    const imgName = this.files[0].name;
    var imgg = imgUpload.nextElementSibling;

    imgg.innerHTML = imgName;
})

selectbtn.addEventListener('click', () => {
    const dropDown = document.querySelector('.select');
    dropDown.classList.toggle('active');

    
})

