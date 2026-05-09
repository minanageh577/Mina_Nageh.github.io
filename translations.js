function checkPassword(){

    var password = document.getElementById("password").value;

    var message = document.getElementById("message");

    if(password.length < 6){

        message.innerHTML = "كلمة المرور قصيرة جداً";

        message.style.color = "red";
    }

    else if(password.length > 6){

        message.innerHTML = "كلمة المرور طويلة جداً";

        message.style.color = "orange";
    }

    else{

        message.innerHTML = "تم إدخال كلمة المرور بشكل صحيح";

        message.style.color = "lightgreen";
    }

}
