const wrapper = document.querySelector('.wrapper');
const loginLink= document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');
const btnPopup= document.querySelector('.btnLogin-popup');
const iconClose= document.querySelector('.icon-close');
const dropdown = document.querySelector('.dropdown');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
})

dropdown.addEventListener('click', ()=> {
    dropdown.classList.toggle('active');

});

// JavaScript to toggle the login popup
/*const openLoginButton = document.getElementById("openLoginButton");
const loginPopup = document.getElementById("loginPopup");

openLoginButton.addEventListener("click", function () {
    loginPopup.style.display = "block";
});

const closeButton = document.querySelector(".icon-close");
closeButton.addEventListener("click", function () {
    loginPopup.style.display = "none";
});

document.addEventListener("click", function (event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = "none";
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        loginPopup.style.display = "none";
    }
});
*/
// Load and insert content from review.html into the "review" section
fetch('review.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#reviewContent').innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading review.html:', error);
    });

// Load and insert content from footer.html into the "footer" section
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#footerContent').innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading footer.html:', error);
    });
