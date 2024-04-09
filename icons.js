// Side Nav

var customBtn = document.querySelector('#btn1');
var sideNav = document.querySelector('.left');
var overlay = document.querySelector('.overlay-prince');
var spans = document.querySelectorAll('.span1');
var flag3 = 1;

customBtn.addEventListener('click', function () {
  if (flag3 == 1) {
    sideNav.style.width = '15%';
    overlay.style.display = 'block';
    spans[0].style.display = 'flex';
    spans[1].style.display = 'flex';
    spans[2].style.display = 'flex';
    spans[3].style.display = 'flex';
    spans[4].style.display = 'flex';
    spans[5].style.display = 'flex';
    spans[6].style.display = 'flex';
    spans[7].style.display = 'flex';
    spans[8].style.display = 'flex';
    spans[9].style.display = 'flex';
    flag = 0;
    customBtn.style.display = 'none';
  }
});

overlay.addEventListener('click', function () {
  sideNav.style.width = '80px';
  overlay.style.display = 'none';
  spans[0].style.display = 'none';
  spans[1].style.display = 'none';
  spans[2].style.display = 'none';
  spans[3].style.display = 'none';
  spans[4].style.display = 'none';
  spans[5].style.display = 'none';
  spans[6].style.display = 'none';
  spans[7].style.display = 'none';
  spans[8].style.display = 'none';
  spans[9].style.display = 'none';
  customBtn.style.display = 'block';
  flag = 1;
});

// Dark Theme...

var darkThemeIcon = document.querySelector('.icon1');
const body = document.body;
var flag = 1;

darkThemeIcon.addEventListener('click', function () {
  if (flag == 1) {
    darkThemeIcon.innerHTML = `<i class="fa-solid fa-moon fa-lg" style="color: #f4f5fa;"></i>`;
    darkThemeIcon.classList.add('top');
    flag = 0;
    body.classList.add('dark-theme');
  } else {
    darkThemeIcon.innerHTML = ` <box-icon
    name="sun"
    type="solid"
    color="#ffffff"></box-icon>`;
    darkThemeIcon.classList.remove('top');
    flag = 1;
    body.classList.remove('dark-theme');
  }
});

// Dropdown...

var dropDownSelector = document.querySelector('.icon3');
var dropDownMenu = document.querySelector('.drop-menu-p');
var flag2 = 1;

dropDownSelector.addEventListener('click', function () {
  if (flag2 == 1) {
    dropDownMenu.style.display = 'flex';
    flag2 = 0;
  } else {
    dropDownMenu.style.display = 'none';
    flag2 = 1;
  }
});

// Window Change

var btn1 = document.querySelector('.left1');
btn1.addEventListener('click', function () {
  window.location.href = 'index.html';
});
var btn2 = document.querySelector('.left2');
btn2.addEventListener('click', function () {
  window.location.href = 'profile.html';
});
var btn3 = document.querySelector('.left3');
btn3.addEventListener('click', function () {
  window.location.href = 'signIn.html';
});
var btn4 = document.querySelector('.left4');
btn4.addEventListener('click', function () {
  window.location.href = 'signUp.html';
});
var btn5 = document.querySelector('.left5');
btn5.addEventListener('click', function () {
  window.location.href = 'pages.html';
});
var btn6 = document.querySelector('.left6');
btn6.addEventListener('click', function () {
  window.location.href = 'form.html';
});
var btn7 = document.querySelector('.left7');
btn7.addEventListener('click', function () {
  window.location.href = 'cards.html';
});
var btn8 = document.querySelector('.left8');
btn8.addEventListener('click', function () {
  window.location.href = 'typo.html';
});
var btn9 = document.querySelector('.left9');
btn9.addEventListener('click', function () {
  window.location.href = 'icons.html';
});
var btn10 = document.querySelector('.left10');
btn10.addEventListener('click', function () {
  window.location.href = 'charts.html';
});

// Right Container...

var rightContainer = document.querySelector('.right');
rightContainer.addEventListener('click', function () {
  dropDownMenu.style.display = 'none';
});

// PopOver

var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});
