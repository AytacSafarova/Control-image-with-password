let password = document.getElementById("password")
let image = document.querySelector("img")
let count =6
console.log(password)
let result=password.innerHTML
console.log(result)
console.log("salam")

let arr = []
password.addEventListener('keyup', changeblur)
function checkNumber(str,count) {
    if(/\d/.test(str)) {
      console.log("tr")
console.log(count+1)
    }
    console.log("checknumber")
  }

  function isUpper(str, count) {
    if(/[A-Z]/.test(str)){
      console.log(count+1)
    };
    
}
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if( specialChars.test(str)){
     count+=1
    };
  }


function changeblur() {
  console.log(result)
  //  checkNumber(value,count)
  //  isUpper(value,count)
  //  console.log(count)
    // if (count = 1) {
    //     image.style.filter = "blur(10px)"
    //     console.log(1)
    // }
    // if (count = 2) {
    //     image.style.filter = "blur(9px)"
    //     console.log(1)

    // }
    // if (count = 3) {
    //     image.style.filter = "blur(6px)"
    //     console.log(1)

    // }
}

console.log(result)
