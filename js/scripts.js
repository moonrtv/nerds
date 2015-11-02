//begin форма всплывающий попап
var showForm = document.querySelector(".contact-btn");
var popup = document.querySelector(".container-form");
var closeForm = document.querySelector(".exit-form");

var nameUser = popup.querySelector("[name='name']");
var emailUser = popup.querySelector("[name='email']");
var form = popup.querySelector("form");

showForm.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("container-form-show");
        nameUser.focus();
      });

closeForm.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("container-form-show");
      });

 form.addEventListener("submit", function(event) {
 		if (!(nameUser.value && emailUser.value)) {
          event.preventDefault();
      	}
      });

 window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("container-form-show")) {
            popup.classList.remove("container-form-show");
          }
        }
      });
//end форма всплывающий попап

                                              //begin слайдер

//  запрашиваем DOM
var links = document.querySelectorAll(".slider-controls li");
var slides = document.querySelectorAll(".slide");

// activeLink обеспечивает метку для активного элемента
var activeLink = 0;

// устанавливаем отслеживание событий
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    // определяем элемент для activeLink
    link.itemID = i;
}

// устанавливаем первый элемент и первый слайд в качестве активного
if (links.length != 0) {
  links[activeLink].classList.add("active");
  slides[activeLink].classList.add("slide-show");
}

function setClickedItem(e) {
    removeActiveLinks();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
        slides[i].classList.remove("slide-show");
    }
}

// Обработчик изменяет позицию слайдера, после того, как мы убедились,
// что в качестве активной обозначена нужная нам ссылка.
function changePosition(link) {
    link.classList.add("active");
    slides[activeLink].classList.add("slide-show");
}

                                              //end слайдер
