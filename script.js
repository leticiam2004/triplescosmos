// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

// carousel albums
window.addEventListener("DOMContentLoaded", function () {
  var carouselContainer = document.getElementById("carousel-container");

  var carouselHTML = `
        <div class="carousel-container-albums">
            <div class="carousel">
                <a href="album-01-ACCESS.html">
                    <div class="album-card" style="background-image: url('https://iili.io/2BIqZcg.jpg');"></div>
                </a>
                <a href="album-02-ASSEMBLE.html">
                    <div class="album-card" style="background-image: url('https://iili.io/2BIqiMP.jpg');"></div>
                </a>
                <a href="album-03-AESTHETIC.html">
                    <div class="album-card" style="background-image: url('https://iili.io/2BIqQKF.jpg');"></div>
                </a>
                <a href="album-04-MUHAN.html">
                    <div class="album-card" style="background-image: url('https://iili.io/2BIqmAv.jpg');"></div>
                </a>
                <a href="album-05-MUJUK.html">
                    <div class="album-card" style="background-image: url('https://iili.io/2BIqpNR.jpg');"></div>
                </a>
                <a href="album-06-StructureOfSadness.html">
                    <div class="album-card" style="background-image: url('https://iili.io/2BIBdPt.jpg');"></div>
                </a>
                <a href="album-07-JustDoIt.html">
                    <div class="album-card" style="background-image: url('https://iili.io/2BIqytp.jpg');"></div>
                </a>
                <a href="album-08-ASSEMBLE24.html">
                    <div class="album-card" style="background-image: url('https://iili.io/2BIqsP1.jpg');"></div>
                </a>
                <a href="album-09-InnerDance.html">
                    <div class="album-card" style="background-image: url('https://iili.io/2BIqbHJ.jpg');"></div>
                </a>
                <a href="album-10-PERFORMANTE.html">
                    <div class="album-card" style="background-image: url('https://iili.io/2BIBJVI.jpg');"></div>
                </a>
            </div>
        </div>
    `;

  carouselContainer.innerHTML = carouselHTML;
});

// member cards
// JavaScript to dynamically load the member carousel
window.addEventListener('DOMContentLoaded', function() {
  var memberCarouselContainer = document.getElementById("member-carousel-container");

  // Create the HTML structure as a string
  var memberCarouselHTML = `
      <div class="carousel-container">
    <div class="carousel">
        <a href="member-s01.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3XBn.jpg');">
                <div class="member-name">Seoyeon</div>
            </div>
        </a>
        <a href="member-s02.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3N2f.jpg');">
                <div class="member-name">Hyerin</div>
            </div>
        </a>
        <a href="member-s03.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3jrG.jpg');">
                <div class="member-name">Jiwoo</div>
            </div>
        </a>
        <a href="member-s04.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3h1s.jpg');">
                <div class="member-name">Chaeyeon</div>
            </div>
        </a>
        <a href="member-s05.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3ekl.jpg');">
                <div class="member-name">Yooyeon</div>
            </div>
        </a>
        <a href="member-s06.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3kp2.jpg');">
                <div class="member-name">Soomin</div>
            </div>
        </a>
        <a href="member-s07.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI38IS.jpg');">
                <div class="member-name">Nakyoung</div>
            </div>
        </a>
        <a href="member-s08.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3UQ9.jpg');">
                <div class="member-name">Yubin</div>
            </div>
        </a>
        <a href="member-s09.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3rBe.jpg');">
                <div class="member-name">Kaede</div>
            </div>
        </a>
        <a href="member-s10.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI34Eu.jpg');">
                <div class="member-name">Dahyun</div>
            </div>
        </a>
        <a href="member-s11.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI36rb.jpg');">
                <div class="member-name">Kotone</div>
            </div>
        </a>
        <a href="member-s12.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3i2j.jpg');">
                <div class="member-name">Yeonji</div>
            </div>
        </a>
        <a href="member-s13.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3sYx.jpg');">
                <div class="member-name">Nien</div>
            </div>
        </a>
        <a href="member-s14.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3QpV.jpg');">
                <div class="member-name">Sohyun</div>
            </div>
        </a>
        <a href="member-s15.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3tTB.jpg');">
                <div class="member-name">Xinyu</div>
            </div>
        </a>
        <a href="member-s16.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3DhP.jpg');">
                <div class="member-name">Mayu</div>
            </div>
        </a>
        <a href="member-s17.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3bQ1.jpg');">
                <div class="member-name">Lynn</div>
            </div>
        </a>
        <a href="member-s18.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3pCF.jpg');">
                <div class="member-name">Joobin</div>
            </div>
        </a>
        <a href="member-s19.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BI3yEg.jpg');">
                <div class="member-name">Hayeon</div>
            </div>
        </a>
        <a href="member-s20.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BIF94a.jpg');">
                <div class="member-name">Shion</div>
            </div>
        </a>
        <a href="member-s21.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BIFJ3J.jpg');">
                <div class="member-name">Chaewon</div>
            </div>
        </a>
        <a href="member-s22.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BIFdYv.jpg');">
                <div class="member-name">Sullin</div>
            </div>
        </a>
        <a href="member-s23.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BIF2vR.jpg');">
                <div class="member-name">Seoah</div>
            </div>
        </a>
        <a href="member-s24.html">
            <div class="member-card"
                style="background-image: linear-gradient(180deg, #00000000 50%, #000000cc 100%), url('https://iili.io/2BIFKTN.jpg');">
                <div class="member-name">Jiyeon</div>
            </div>
        </a>
    </div>
</div>

  `;

  // Insert the HTML into the container
  memberCarouselContainer.innerHTML = memberCarouselHTML;
});

// slides
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicators button");
let currentIndex = 0;
let interval;

function updateSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  updateSlide(currentIndex);
}

// Event listeners for indicators
indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    currentIndex = i;
    updateSlide(currentIndex);
    resetAutoSlide();
  });
});

// Function to start auto-slide
function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}

// Function to reset auto-slide timer
function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

// Initialize first slide and start auto-slide
updateSlide(currentIndex);
startAutoSlide();


// lightbox

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}