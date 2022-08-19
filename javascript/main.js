const arr = [
  {
    id: 1,
    imageDesk: 'img/popup-desk-book.jpg',
    imageMob: 'img/popup-mob-book.jpg',
    title: 'Awesome books',
    description: "Create your own book list with 'awesome book' app",
    live: 'https://username-forgithub.github.io/book_collection/',
    source: 'https://github.com/username-forGithub/awesome-books',
    tech: ['HTML', 'GitHub', 'Javascript', 'Bootstrap'],
  },
  {
    id: 2,
    imageDesk: 'img/popup-desk-course.jpg',
    imageMob: 'img/popup-mob-course.jpg',
    title: 'Online courses',
    description: "Beatiful online courses website",
    live: 'https://username-forgithub.github.io/online_courses',
    source: 'https://github.com/username-forGithub/online_courses',
    tech: ['CSS', 'GitHub', 'Javascript', 'Bootstrap'],
  },
  {
    id: 3,
    imageDesk: 'img/popup-desk-todo.jpg',
    imageMob: 'img/popup-mob-todo.jpg',
    title: 'Best to do list app',
    description: "This app balances power with simplicity, and it does so while running on basically every platform that exists. That's a strong selling point—which is probably why Todoist is one of the most popular to-do lists right now.",
    live: 'https://username-forgithub.github.io/To-Do-List',
    source: 'https://github.com/username-forGithub/To-Do-List',
    tech: ['HTML', 'Javascript', 'Bootstrap'],
  },
  {
    id: 4,
    imageDesk: 'img/popup-desk.jpg',
    imageMob: 'img/popup-mob.jpg',
    title: 'Keeping track of hundreds of components4',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://google.com',
    source: 'https://google.com',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    id: 5,
    imageDesk: 'img/popup-desk.jpg',
    imageMob: 'img/popup-mob.jpg',
    title: 'Keeping track of hundreds of components5',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://google.com',
    source: 'https://google.com',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    id: 6,
    imageDesk: 'img/popup-desk.jpg',
    imageMob: 'img/popup-mob.jpg',
    title: 'Keeping track of hundreds of components6',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://google.com',
    source: 'https://google.com',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
];
let htmlstring = '';
arr.forEach((item) => {
  let string = `
    <div class="work-item">
      <div class="div-wrapper"><img class="main-img" src="${item.imageMob}"></div>
      <div class="bottom-part">
          <h4>${item.title}</h4>
          <ul>`;
  let string1 = '';
  item.tech.forEach((li) => {
    string1 += `<li><a>${li}</a></li>`;
  });
  string += `${string1}
          </ul>
          <a id="${item.id}" class="btn-green">See Project</a>
      </div>
    </div>
    `;
  htmlstring += string;
  string = '';
});
const getWrapper = document.querySelector('.wrapper');
getWrapper.innerHTML = htmlstring;
const getheader = document.querySelector('header');
const getmenu = document.querySelector('.humburger-wrapper');
const getclose = document.querySelector('nav ul .closeclass');
const getli = document.querySelectorAll('nav ul .linkclass');
const getprojbtn = document.querySelectorAll('.works .work-item .btn-green');
const getpopupclose = document.querySelector('.popup .closeclass');
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
getprojbtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    const getId = e.currentTarget.id;
    const result = arr.find((item1) => item1.id === Number(getId));
    let popupHtml = '';
    popupHtml = `
              <picture class="image-wrapper">
                  <source media="(min-width:768px)" srcset="${result.imageDesk}" alt="">
                  <img src="${result.imageMob}" alt="" >
              </picture>
              <div class="title-and-btn">
                  <h2>${result.title}</h2>
                  <div class="btn-wrapper">
                      <a href="${result.live}" class="btn-green" type="submit">See live <img src="img/popup-see.svg"></a>
                      <a href="${result.source}" class="btn-green" type="submit">See source<img src="img/popup-GitHub.svg"></a>
                  </div>
              </div>
              <div class="works">
                  <ul>`;
    let string1 = '';
    result.tech.forEach((li) => {
      string1 += `<li><a>${li}</a></li>`;
    });
    popupHtml += `${string1}
                  </ul>
              </div>
              <p>
                  ${result.description}
              </p>
              `;
    getpopupclose.insertAdjacentHTML('afterend', popupHtml);
    document.querySelector('body').classList.add('no-scroll');
  });
});
getpopupclose.addEventListener('click', () => {
  document.querySelector('body').classList.remove('no-scroll');
  while (getpopupclose.nextElementSibling) {
    getpopupclose.nextElementSibling.remove();
  }
});
const getformbtn = document.querySelector('.form form');
const geterror = document.querySelector('.errorclass');
getformbtn.addEventListener('submit', (e) => {
  if (getformbtn.useremail.value !== getformbtn.useremail.value.toLowerCase()) {
    geterror.style.display = 'block';
    e.preventDefault();
  }
});
