var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// Navigation
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
// End Navigation

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
//End Swiper Slider

// Filter
function filterPage(mainClass) {
  const allTab = document.querySelectorAll(`${mainClass} .filter-btn`);

  allTab.forEach((tab) => {
    tab.addEventListener("click", function () {
      allTab.forEach((tab) => {
        tab.classList.remove("active");
      });
      this.classList.add("active");
      const tabContent = document.querySelectorAll(`${mainClass} .filter-cards`);
      tabContent.forEach((content) => {
        content.classList.remove("t-active");
      });
      const tabActive = document.querySelector(`${mainClass} .tab` + this.dataset.tab);
      tabActive.classList.add("t-active");
    });
  });
}

filterPage(".bridal");
filterPage(".itinerary");
// End Filter



		$(document).ready(function(even){
			   $("button").click(function(){
            var checkvalue = [];
            $.each($("input[name='']:checked"), function(){            
                checkvalue.push($(this).val());
            });
            alert("Opening your email app!");
        });
		});
