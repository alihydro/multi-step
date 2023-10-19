document.addEventListener("DOMContentLoaded", function() {


let textLi = document.querySelectorAll(".text ul li");
let textLiarray = Array.from(textLi);
// console.log(textLiarray);
let buttonNext = document.querySelectorAll("button");

let  yourInfo = document.querySelector("#your-info")
let  landing = document.querySelector(".landing")
let landingTwo = document.querySelector(".landing-two")
let landingThree = document.querySelector(".landing-three")
let landingFour = document.querySelector(".landing-four")
let thenks = document.querySelector(".thenks")

let turnOn = document.querySelector(".box-offer div span")
let clickAndTurn = document.querySelector('.box-offer div') 
let goBack = document.querySelectorAll("#span");
let yourInfoSpan = document.querySelectorAll("#your-info span")
let inputName = document.querySelector('input#name')
let inputEmail = document.querySelector('input#email')
let inputPhone = document.querySelector('input#phone')
let commint = document.querySelectorAll("span.commint ")
let Change = document.querySelector("#Change")
let boxFinishOne = document.querySelector(".box-finish-one span")
let boxFinishOneDiv = document.querySelector(".box-finish-one div p")
let boxsP = document.querySelector(".boxs-p")
let checkbox = document.querySelectorAll('input[type="checkbox"]')
let pickBox = document.querySelectorAll(".pick-box")
let boxFinishLarger = document.querySelector(".box-finish.online");
let boxFinishLargerSpan = document.querySelector(".box-finish.online span");
let boxFinishOnline = document.querySelector(".box-finish.larger");
let boxFinishOnlineSpan = document.querySelector(".box-finish.larger span");
let boxFinishProfile = document.querySelector(".box-finish.Profile");
let boxFinishProfileSpan = document.querySelector(".box-finish.Profile span");
let totlePrice = document.querySelector('#Total')



// let tt = parseInt(boxFinishLargerSpan.innerHTML) 
// let gg = parseInt(boxFinishProfileSpan.innerHTML)

// hhhhhhhhhhhhh
let color = document.querySelector(".box-offer #monthly");
let colorTWo = document.querySelector(".box-offer #Yearly");
let yaerlyprice = document.querySelectorAll(".Yearly")
let priceMounthly = document.querySelectorAll(".box > span")
let yearlyPrice = document.querySelectorAll(".yearly-price")
let mounthlyPrice = document.querySelectorAll('.mounthly-price')
// hhhhhhhhhh
let pickBoxArray = Array.from(pickBox);
let checkboxArray = Array.from(checkbox);
let commitArray = Array.from(commint);
let goBackArray = Array.from(goBack)
let box = document.querySelectorAll(".box")
console.log(commitArray);
let ArrayButton = Array.from(buttonNext)
let spanArray = Array.from(yourInfoSpan)
let boxArray = Array.from(box);
boxArray[0].onclick = function () {
    boxArray[0].classList.add("hover")
    boxArray[1].classList.remove("hover")
    boxArray[2].classList.remove("hover")
    boxsP.style.display = 'none'
    if (turnOn.style.marginLeft === '16px') {
        boxFinishOne.innerHTML = "$90/mo"
        boxFinishOneDiv.innerHTML = "Arcade(Yearly)"
    }else {
       
        boxFinishOne.innerHTML = "$9/mo"
        boxFinishOneDiv.innerHTML = "Arcade(monthly)"
    }
    
}
boxArray[1].onclick = function () {
    boxArray[0].classList.remove("hover")
    boxArray[1].classList.add("hover")
    boxsP.style.display = 'none'
    boxArray[2].classList.remove("hover")

    if (turnOn.style.marginLeft === '16px') {
        boxFinishOne.innerHTML = "$120/mo"
        boxFinishOneDiv.innerHTML = "Advanced(Yearly)"
    }else {
        boxFinishOne.innerHTML = "$12/mo"
        boxFinishOneDiv.innerHTML = "Advanced(monthly)"
    }

}
boxArray[2].onclick = function () {
    boxArray[0].classList.remove("hover")
    boxArray[1].classList.remove("hover")
    boxsP.style.display = 'none'
    boxArray[2].classList.add("hover")
    if (turnOn.style.marginLeft === '16px') {
        boxFinishOne.innerHTML = "$150/mo"
        boxFinishOneDiv.innerHTML = "Pro(Yearly)"
    }else {
        boxFinishOne.innerHTML = "$12/mo"
        boxFinishOneDiv.innerHTML = "Pro(monthly)"
    }
    
}


checkboxArray[0].onclick = function () {
    if (checkboxArray[0].checked) {
     pickBoxArray[0].style.borderColor ='hsl(243, 100%, 62%)' 
     pickBoxArray[0].style.backgroundColor ='rgb(71 61 255 / 10%)'
     boxFinishLarger.style.display = 'flex' 
     if (turnOn.style.marginLeft === '16px') {
         boxFinishLargerSpan.innerHTML ='+10$/mo'
     } else {
         boxFinishLargerSpan.innerHTML ='+1$/mo'
     }
    } else {
     pickBoxArray[0].style.backgroundColor ='white'
     pickBoxArray[0].style.borderColor = "hsl(231, 11%, 63%)"
     boxFinishLarger.style.display = 'none' 
     boxFinishLargerSpan.innerHTML ='+0$/mo'
    } 
 }
 
 checkboxArray[1].onclick = function () {
     if (checkboxArray[1].checked) {
         pickBoxArray[1].style.borderColor ='hsl(243, 100%, 62%)' 
         pickBoxArray[1].style.backgroundColor ='rgb(71 61 255 / 10%)' 
         boxFinishOnline.style.display = 'flex'
         if (turnOn.style.marginLeft === '16px') {
             boxFinishOnlineSpan.innerHTML ='+20$/mo'
 
         }
         else {
             boxFinishOnlineSpan.innerHTML ='+2$/mo'
         }
        
        
     } else {
         pickBoxArray[1].style.backgroundColor ='white'
         pickBoxArray[1].style.borderColor = "hsl(231, 11%, 63%)"
         boxFinishOnline.style.display = 'none'
         boxFinishOnlineSpan.innerHTML ='+0$/mo'
     } 
    
  }
 
 
  checkboxArray[2].onclick = function () {
     if (checkboxArray[2].checked) {
         pickBoxArray[2].style.borderColor ='hsl(243, 100%, 62%)' 
         pickBoxArray[2].style.backgroundColor ='rgb(71 61 255 / 10%)' 
         boxFinishProfile.style.display = 'flex'
         if (turnOn.style.marginLeft === '16px') {
             boxFinishProfileSpan.innerHTML ='+20$/mo'
         } else {
             boxFinishProfileSpan.innerHTML ='+2$/mo'
         }
     } else {
         pickBoxArray[2].style.backgroundColor ='white'
         pickBoxArray[2].style.borderColor = "hsl(231, 11%, 63%)"
         boxFinishProfile.style.display = 'none'
         boxFinishProfileSpan.innerHTML ='+0$/mo'
     } 
  }
   
 
 
 
 

    ArrayButton[0].onclick = function () {
        if (inputName.value === "") {
            inputName.style.outlineWidth = "1px";
            inputName.style.outlineStyle = "solid";
            inputName.style.outlineColor = "red";
            commitArray[0].style.display = "inline" ;
        } else if (inputEmail.value === '' || !inputEmail.value.includes('@')) {
            commitArray[0].style.display= "none" ;
            commitArray[1].style.display = "inline" ;
            inputName.style.outlineColor = "black";
            inputEmail.style.outlineWidth = "1px";
            inputEmail.style.outlineStyle = "solid";
            inputEmail.style.outlineColor = "red";
        }else if (inputPhone.value === "" ) {
            commitArray[1].style.display= "none" ;
            commitArray[2].style.display= "inline" ;
            inputEmail.style.outlineColor = "black";
            inputPhone.style.outlineWidth = "1px";
            inputPhone.style.outlineStyle = "solid";
            inputPhone.style.outlineColor = "red";
        }else {
            
            landing.style.display = 'none';
            landingTwo.style.display = 'inline';
            spanArray[0].classList.remove('clicked');
            console.log(spanArray[0]);
            spanArray[1].classList.add('clicked');
            
        }
        
      

    }
    inputName.onclick = function () {
        inputName.style.outlineColor = "black";
        commitArray[0].style.display = "none" ;
    }
    inputEmail.onclick = function () {
        inputEmail.style.outlineColor = "black";
        commitArray[1].style.display = "none" ;
    }
    inputPhone.onclick = function () {
        inputPhone.style.outlineColor = "black";
        commitArray[2].style.display = "none" ;
    }
    ArrayButton[1].onclick = function () {
        if (boxArray[0].classList.contains("hover") || boxArray[1].classList.contains("hover") || boxArray[2].classList.contains("hover")) {
            landing.style.display = 'none'
            landingTwo.style.display = 'none'
            landingThree.style.display = 'inline'
            spanArray[1].classList.remove('clicked')
            spanArray[2].classList.add('clicked')
        } else {
            boxsP.style.display = 'inline'
        }
       if (!checkboxArray[0].checked) {
        boxFinishLargerSpan.innerHTML ='+0$/mo'
       }
       if (!checkboxArray[1].checked) {
        boxFinishOnlineSpan.innerHTML ='+0$/mo'
       }
       if (!checkboxArray[2].checked) {
        boxFinishProfileSpan.innerHTML ='+0$/mo'
       }
    }
    ArrayButton[2].onclick = function () {
        landing.style.display = 'none'
            landingTwo.style.display = 'none'
            landingThree.style.display = 'none'
            landingFour.style.display = 'inline'
            spanArray[2].classList.remove('clicked')
            spanArray[3].classList.add('clicked')

           
 let totle = parseFloat(boxFinishOne.innerHTML.replace(/[^0-9.]/g, ''))  + parseInt(boxFinishOnlineSpan.innerHTML) +  parseInt(boxFinishLargerSpan.innerHTML) +  parseInt(boxFinishProfileSpan.innerHTML) 
 console.log(totle);
   totlePrice.innerHTML =`$${totle}/mo`
          

         

    }
    ArrayButton[3].onclick = function () {
        landing.style.display = 'none'
            landingTwo.style.display = 'none'
            landingThree.style.display = 'none'
            landingFour.style.display = 'none'
            thenks.style.display = 'inline'
    }

    console.log(goBackArray);

goBack[0].onclick = function () {
    landingTwo.style.display = 'none'
    landing.style.display = 'inline'
    spanArray[0].classList.add('clicked')
    spanArray[1].classList.remove('clicked')
}
goBack[1].onclick = function () {
    landing.style.display = 'none'
    landingThree.style.display = 'none'
            landingTwo.style.display = 'inline'
            spanArray[1].classList.add('clicked')
            spanArray[2].classList.remove('clicked')
}
goBack[2].onclick = function () {
    landing.style.display = 'none'
    landingTwo.style.display = 'none'
    landingThree.style.display = 'inline'
    landingFour.style.display ='none'
    spanArray[2].classList.add('clicked')
            spanArray[3].classList.remove('clicked')
}


Change.onclick = function () {
    landing.style.display = 'none'
            landingTwo.style.display = 'inline'
            landingFour.style.display = 'none'
            spanArray[3].classList.remove('clicked')
            spanArray[1].classList.add('clicked')
}




        clickAndTurn.addEventListener("click", function () {
    if (turnOn.style.marginLeft === '16px') {
        turnOn.style.marginLeft = '0px';
        color.classList.add("color")
            boxArray[0].classList.remove("hover")
            boxArray[1].classList.remove("hover")
            boxArray[2].classList.remove("hover")
        colorTWo.classList.remove("color")
        yaerlyprice.forEach(ele => {
            ele.style.display = "none"
    });
    priceMounthly.forEach(element => {
        element.style.display = "block"
    })

    mounthlyPrice.forEach( ele => {
        ele.style.display = "block"
    })
    yearlyPrice.forEach(ele => {
        ele.style.display = 'none'
});

pickBoxArray[2].style.backgroundColor ='white'
pickBoxArray[2].style.borderColor = "hsl(231, 11%, 63%)"
boxFinishProfile.style.display = 'none'
pickBoxArray[1].style.backgroundColor ='white'
        pickBoxArray[1].style.borderColor = "hsl(231, 11%, 63%)"
        boxFinishOnline.style.display = 'none'
        pickBoxArray[0].style.backgroundColor ='white'
        pickBoxArray[0].style.borderColor = "hsl(231, 11%, 63%)"
        boxFinishLarger.style.display = 'none' 
        if (checkboxArray[1].checked ) {
            checkboxArray[1].checked = !checkboxArray[1].checked;
        }
        if (checkboxArray[0].checked) {
            checkboxArray[0].checked = !checkboxArray[0].checked;
           
        }
        if (checkboxArray[2].checked) {
            checkboxArray[2].checked = !checkboxArray[2].checked;
        }
       
    } else {
        turnOn.style.marginLeft = '16px';
        color.classList.remove("color")
        colorTWo.classList.add("color")
            boxArray[0].classList.remove("hover")
            boxArray[1].classList.remove("hover")
            boxArray[2].classList.remove("hover")


        yearlyPrice.forEach( ele => {
            ele.style.display = 'inline'
        })
        mounthlyPrice.forEach( ele => {
            ele.style.display = 'none'
        })
        yaerlyprice.forEach(ele => {
            ele.style.display = "block"
    });
    priceMounthly.forEach(element => {
        element.style.display = "none"
    })
    pickBoxArray[2].style.backgroundColor ='white'
    pickBoxArray[2].style.borderColor = "hsl(231, 11%, 63%)"
    boxFinishProfile.style.display = 'none'
    pickBoxArray[1].style.backgroundColor ='white'
        pickBoxArray[1].style.borderColor = "hsl(231, 11%, 63%)"
        boxFinishOnline.style.display = 'none'
        pickBoxArray[0].style.backgroundColor ='white'
        pickBoxArray[0].style.borderColor = "hsl(231, 11%, 63%)"
        boxFinishLarger.style.display = 'none' 
        if (checkboxArray[1].checked ) {
            checkboxArray[1].checked = !checkboxArray[1].checked;
        }
        if (checkboxArray[0].checked) {
            checkboxArray[0].checked = !checkboxArray[0].checked;
           
        }
        if (checkboxArray[2].checked) {
            checkboxArray[2].checked = !checkboxArray[2].checked;
        }
       
     
    
    }
});

if (boxArray[0].classList.contains("hover")) {
    console.log("boxArray[0]");
}
    })






