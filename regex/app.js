document.getElementById("name").addEventListener("blur", validatename);
document.getElementById("email").addEventListener("blur", validateemail);
document.getElementById("phone").addEventListener("blur", validatephone);
document.getElementById("zip").addEventListener("blur", validatezip);

function validatename() {
  const name = document.getElementById("name");
  const re = /^[a-zA-z]{2,10}$/;
  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}
function validatezip() {
  const zip = document.getElementById("zip");
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}
function validateemail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}
function validatephone() {
  const phone = document.getElementById("phone");
  const re = /^[0-9]{11}$/;
  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
