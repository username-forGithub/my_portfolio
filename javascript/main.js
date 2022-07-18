let get_header = document.querySelector("header")
let get_menu = document.querySelector(".humburger-wrapper")
let get_close = document.querySelector("nav ul span")
let get_li = document.querySelectorAll("nav ul li")
get_menu.addEventListener("click", function(){
    get_header.classList.toggle("active");
})
get_close.addEventListener('click', function(){
    get_header.classList.remove("active")
})
get_li.forEach(function(item){
    item.addEventListener('click', function(){
        get_header.classList.remove("active")
    })
})