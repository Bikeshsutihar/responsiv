var i = document.getElementById('icon')
var ul = document.getElementById('right')
var section = document.getElementById('sec')

i.addEventListener('click', function () {
    ul.classList.toggle('side_bar');

})
section.addEventListener('click', function () {
    ul.classList.remove('side_bar')
})

function sendinfo() {

    var name = document.forms.reg.fullname.value;
    // var pass= document.forms.reg.password.value;
    var pass = document.getElementById('ps').value;

    if (name == "") {

        alert('enter user name');
        return false;
    }

    if (pass == "") {
        // alert("enter password");
        var d = document.querySelector('p');
        d.innerHTML = "enter password";
        console.log("hi");

        return false;
    }
    else {
        var d = document.querySelector('p');
        d.innerHTML = "";
        return true;
        console.log("bye");

    }
    
    
}

var is_variable = false;

function see() {
    var input = document.getElementById('ps');
    var see = document.getElementById('see');

    if (is_variable) {
        input.type = 'password';
        is_variable = false;
        see.style.color = 'gray';
    }
    else {
        input.type = 'text';
        is_variable = true;
        see.style.color = 'black';
    }

}








// var d= document.querySelector('p');
//    d.innerHTML = "enter your password";