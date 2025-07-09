  // const display = document.getElementById('display');

  //   function append(char) {
  //     if (display.innerText === '0') {
  //       display.innerText = char;
  //     } else {
  //       display.innerText += char;
  //     }
  //   }

  //   function clearDisplay() {
  //     display.innerText = '0';
  //   }

  //   function deleteLast() {
  //     display.innerText = display.innerText.slice(0, -1) || '0';
  //   }

  //   function calculate() {
  //     try {
  //       display.innerText = eval(display.innerText.replace('%', '/100'));
  //     } catch {
  //       display.innerText = 'Error';
  //     }
  //   }


  // document.getElementsByTagName("input")[1].addEventListener("click", function() {
  //   document.getElementById("screen").value +=  document.getElementsByTagName("input")[1].value
  // })

  // document.getElementsByTagName("input")[2].addEventListener("click", function() {
  //   document.getElementById("screen").value +=  document.getElementsByTagName("input")[2].value
  // })

  // document.getElementsByTagName("input")[3].addEventListener("click", function() {
  //   document.getElementById("screen").value +=  document.getElementsByTagName("input")[3].value
  // })

for (let number = 3; number <= 19; number++){
  document.getElementsByTagName("input")[number].addEventListener("click", function() {
    document.getElementById("screen").value +=  document.getElementsByTagName("input")[number].value
  })
}
// the code below is for the AC btn
document.getElementsByTagName("input")[1].addEventListener("click", function() {
  document.getElementById("screen").value = ""
})

  
// the code below is for the del btn
document.getElementsByTagName("input")[2].addEventListener("click", function() {
  document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1);
})

// the code below is for the del btn
document.getElementsByTagName("input")[20].addEventListener("click", function() {
  document.getElementById("screen").value = eval(document.getElementById("screen").value);
})