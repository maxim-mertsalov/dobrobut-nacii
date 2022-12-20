// CHOSE GAME VARIANT
const varsGame = document.querySelectorAll("input[name='game']");
const varGameInfo = document.querySelector("#varGameInfo");
const expDemo = document.getElementById("exp-demo");
const expSec = document.getElementById("exp-sec");
const exps = document.querySelectorAll("input[name='exp']")


const VariantFunction = () => {
    for (let vG = 0; vG < varsGame.length; vG++) {
        const el = varsGame[vG];
        if (el.checked){
            varGameInfo.innerHTML = el.dataset.detail
        }
        if(el.checked && el.dataset.id == "0"){
            expDemo.checked = true;
            expDemo.removeAttribute("disabled")
            exps.forEach((exp) => {
                if(exp.getAttribute("id") != "exp-demo")
                    exp.setAttribute("disabled", "true")
            })
            // expDemo.setAttribute("disabled", "true")
        }
        else if(el.checked && el.dataset.id != "0"){
            expSec.checked = true;
            expDemo.setAttribute("disabled", "true")
            exps.forEach((exp) => {
                if(exp.getAttribute("id") != "exp-demo")
                    exp.removeAttribute("disabled")    
            })
        }
    }
}
varsGame.forEach((el) => {
    el.addEventListener("click", VariantFunction)
})
// VariantFunction()

// CHOSE MESSANGER
const telRadio = document.getElementById("tel-radio");
const telStar = document.getElementById("tel-star")
const telField = document.getElementById("telegram")
const vibRadio = document.getElementById("vib-radio")

const checkTell = () => {
    if(telRadio.checked == true){
        telStar.style.display = "inline-block";
        telField.setAttribute("required", "true")
    }else{
        telStar.style.display = "none";
        telField.removeAttribute("required")
    }
    CheckRadio();
}

// const checkVib = () => {
//     CheckRadio();
// }

const CheckRadio = () => {
    if(vibRadio.checked && !telRadio.checked){
        console.log("1")
        vibRadio.setAttribute("disabled", "true");
        telRadio.removeAttribute("disabled")
    }
    else if(!vibRadio.checked && telRadio.checked){
        console.log("2")
        telRadio.setAttribute("disabled", "true");
        vibRadio.removeAttribute("disabled")
    }
    else{
        telRadio.removeAttribute("disabled")
        vibRadio.removeAttribute("disabled")
    }
}


telRadio.addEventListener("click", checkTell);
vibRadio.addEventListener("click", CheckRadio);

// CheckRadio();
VariantFunction()
checkTell()