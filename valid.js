function myOnClickFn() {
    document.location.href="file:///C:/Users/lenovo/mini-p/index2.html";
}
function register()
{
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}


   


// const register = document.getElementById('register');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');
// const name1 = document.getElementById('name1');
// const login = document.getElementById('login');

// register.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();
//     const name1Value = name1.value.trim();
//     var a;
//     var b;
//     var c;
//     var d;
//     var e;
//     if(usernameValue === '') {
//         setError(username, 'Required');
//     } else {
//         setSuccess(username);
//        var a=1;
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//         var b=2;
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//        var c=3;
//     }

//     if(password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//        var d=4;
//     }

//     if(name1Value === '') {
//         setError(name1, 'Required');
//     } else {
//         setSuccess(name1);
//        var a=1;
//     }
//     if(a==1&&b==2&&c==3&&d==4&&e==5){
//         myOnClickFn();
//     }
// };
