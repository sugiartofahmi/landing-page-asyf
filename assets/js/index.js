let prevScroll = window.pageYOffset;
window.onscroll = () => {
  let currentScroll = window.pageYOffset;
  prevScroll > currentScroll
    ? (document.getElementsByTagName("header")[0].style.top = "0")
    : (document.getElementsByTagName("header")[0].style.top = "-100px");
  prevScroll = currentScroll;
};

const handleGetFormData =()=>{
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const city = document.getElementById("city").value
  const zipCode = document.getElementById("zip-code").value
  const status = document.getElementById("status").checked
 return {name, email, city, zipCode, status}
}

const isNumber=(num)=> isNaN(num) ? false : true

const checkboxIsChecked = () => handleGetFormData().status ? true :false

const validateFormData =(obj)=>  obj.name != ""&& obj.city != ""&& obj.email != "" && obj.zipCode != ""&& obj.status != ""&& isNumber(obj.zipCode) && checkboxIsChecked() ? true : false

const submit =()=>{
 validateFormData(handleGetFormData())
    ? (warning.innerText = "")
    : (warning.innerText = "Periksa form anda sekali lagi");
}

const form = document.getElementById("submit-form");
const warning = document.getElementById("warning");
form.addEventListener("click", (event) => {
  event.preventDefault();
  submit()
});