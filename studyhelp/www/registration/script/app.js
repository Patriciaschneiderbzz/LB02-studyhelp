const form = document.getElementById("form");
const username = document.getElementById("username");
const vorname = document.getElementById("vorname");
const email = document.getElementById("email");
const telefon = document.getElementById("telefon");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    let small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}
// Check if phone is valid
function checktelefon(id,input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(?:(?:|0{1,2}|\+{0,2})41(?:|\(0\))|0)([1-9]\d)(\d{3})(\d{2})(\d{2})$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'telefon is not valid')
        }
    }
    return result;
}


function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function checkPasswordsMatch(password1, password2) {
    if (password1.value !== password2.value) {
        showError(password2, "Password do not match");
    }
}

function checkLength(input, min, max) {
    if (input.value.length <= min) {
        showError(
            input,
            `${getFieldName(input)} must be more than ${min} characters`
        );
    } else if (input.value.length >= max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkRequired([username, vorname, email, telefon, password, password2]);
    checkLength(username, 3, 15);
     checkLength(vorname, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    if (password2.value !== "") {
        checkPasswordsMatch(password, password2);
    }
});


         document.querySelector('.card-number-input').oninput = () => {
                document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input')
                    .value;
            }

            document.querySelector('.card-holder-input').oninput = () => {
                document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input')
                    .value;
            }

            document.querySelector('.month-input').oninput = () => {
                document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
            }

            document.querySelector('.year-input').oninput = () => {
                document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
            }

            document.querySelector('.cvv-input').onmouseenter = () => {
                document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
                document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
            }

            document.querySelector('.cvv-input').onmouseleave = () => {
                document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
                document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
            }

            document.querySelector('.cvv-input').oninput = () => {
                document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
            }

           function is_creditCard(str)
{
 regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  
        return regexp.test(str);
}
const dropArea = document.querySelector(".drop_box"),
    button = dropArea.querySelector("button"),
    dragText = dropArea.querySelector("header"),
    input = dropArea.querySelector("input");
let file;
var filename;

button.onclick = () => {
    input.click();
};

input.addEventListener("change", function (e) {
    var fileName = e.target.files[0].name;
    let filedata = `
    <form action="" method="post">
    <div class="form">
    <h4>${fileName}</h4>
    <input type="email" placeholder="Enter email upload file">
    <button class="btn">Upload</button>
    </div>
    </form>`;
    dropArea.innerHTML = filedata;
});

console.log(is_creditCard("378282246310006"));

console.log(is_creditCard("37828224630006"));

