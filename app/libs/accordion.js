[...document.getElementsByClassName("accordion__el")].forEach(function(item, i, arr) {
  const maxHeightDefault = item.querySelector('.accordion__el-body').clientHeight;
  item.querySelector('.accordion__el-toggle').addEventListener("click", function(e) {
    [...document.getElementsByClassName("accordion__el")].forEach((el, k) => {
      if(i != k) {
        el.classList.remove('active');
        el.querySelector('.accordion__el-body').style.maxHeight = null;
      }
    })
    item.classList.toggle("active");
    item.querySelector('.accordion__el-toggle').classList.toggle("active");
    console.log(this.nextElementSibling.clientHeight);
    if (this.nextElementSibling.clientHeight < this.nextElementSibling.scrollHeight) {
      this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
    } else {
      this.nextElementSibling.style.maxHeight = maxHeightDefault + "px";
    }
  });
});

