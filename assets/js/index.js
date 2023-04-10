let prevScroll = window.pageYOffset;
window.onscroll = () => {
  let currentScroll = window.pageYOffset;
  prevScroll > currentScroll
    ? (document.getElementsByTagName("header")[0].style.top = "0")
    : (document.getElementsByTagName("header")[0].style.top = "-100px");
  prevScroll = currentScroll;
};
