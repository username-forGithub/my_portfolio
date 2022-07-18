const getheader = document.querySelector('header');
const getmenu = document.querySelector('.humburger-wrapper');
const getclose = document.querySelector('nav ul .closeclass');
const getli = document.querySelectorAll('nav ul .linkclass');
getmenu.addEventListener('click', () => {
  getheader.classList.toggle('active');
});
getclose.addEventListener('click', () => {
  getheader.classList.remove('active');
});
getli.forEach((item) => {
  item.addEventListener('click', () => {
    getheader.classList.remove('active');
  });
});