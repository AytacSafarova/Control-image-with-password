let password = document.getElementById("password")
let image = document.querySelector("img")
let count = 400

image.style.filter = `blur(${count}px)`
password.addEventListener('keyup', changeblur)

function changeblur() {
  if (/\d/.test(password.value)) {
    count -= 100
    image.style.filter = `blur(${count}px)`
    return
  }

  if (/[A-Z]/.test(password.value)) {
    count -= 100
    image.style.filter = `blur(${count}px)`
    return
  };

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (specialChars.test(password.value)) {
    count -= 100
    image.style.filter = `blur(${count}px)`
    return
  };
  
  if (password.value.length > 8) {
    count -= 100
    image.style.filter = `blur(${count}px)`
    return
  }
}
