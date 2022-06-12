const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,6}$/;
const passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/; 
const numberRegEx = /^[0-9]{10}$/; // numberRegEx.test(contact.val)

const signin = document.querySelector('#submit');
const email = document.querySelector('#inputEmail4');
const password = document.querySelector('#inputPassword4');
const phone = document.querySelector('#inputPhone');
const address = document.querySelector('#inputAddress');
const city = document.querySelector('#inputCity');
const state = document.querySelector('#inputState');
const zip = document.querySelector('#inputZip');
const dob = document.querySelector('#inputDob');
const roll = document.querySelector('#inputRoll');
const course = document.querySelector('#inputCourse');
const male = document.querySelector('#btnradio1');
const female = document.querySelector('#btnradio2');


submit.onclick = function () {

    if (!emailRegEx.test(email.value)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    } else if (!passwordRegEx.test(password.value)) {
        window.alert("Please enter a valid Password.");
        password.focus();
        return false;
    } else  if (!numberRegEx.test(phone.value)) {
        window.alert("Please enter a valid Mobile Number.");
        phone.focus();
        return false;
    } else if(address.value ==""){
        window.alert("Please enter the Address");
        address.focus();
        return false;
    }else if(city.value ==""){
        window.alert("Please enter the city");
        city.focus();
        return false;
    }else if(state.value ==""){
        window.alert("Please enter the state");
        state.focus();
        return false;
    }else if(zip.value ==""){
        window.alert("Please enter the city");
        zip.focus();
        return false;
    }else if(dob.value ==""){
        window.alert("Please enter the dob");
        dob.focus();
        return false;
    }else if(roll.value ==""){
        window.alert("Please enter the Roll no ");
        roll.focus();
        return false;
    }else if(course.value=="Choose..."){
        window.alert("Please choose the course");
        course.focus();
        return false;
    }
    else{   
    console.log("success");
    window.location.href = "/js-tasks/displaypage.html";
    }

}

