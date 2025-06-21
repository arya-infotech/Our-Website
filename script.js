// Services Page ----------------------------------------------------------------

// Load header and footer content
fetch('navbar.html')
    .then(res => res.text())
    .then(data => document.getElementById('navbar').innerHTML = data);
fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);

//    AOS Initialization
AOS.init();

// Services Section Carousel
document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery != 'undefined') {
        try {
            jQuery('.services-list').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                navText: [
                    '<i class="bi bi-arrow-left-circle"></i>',
                    '<i class="bi bi-arrow-right-circle"></i>'
                ],
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    576: {
                        items: 2,
                        nav: false
                    },
                    992: {
                        items: 3,
                        nav: true
                    }
                }
            });
            console.log('Owl Carousel initialized successfully');
        } catch (error) {
            console.error('Error initializing Owl Carousel:', error);
        }
    } else {
        console.error('jQuery is not loaded');
    }
});

// Hero section slider with animations
const serviceSlides = [
    {
        meta: "Service",
        title: "IT Consulting",
        status: "Expert technology advice.",
        image: "./images/services/slide-1.jpg",
        alt: "IT Consulting"
    },
    {
        meta: "Service",
        title: "SEO Services",
        status: "Boost search rankings.",
        image: "./images/services/slide-2.jpg",
        alt: "SEO Services"
    },
    {
        meta: "Service",
        title: "UI/UX Design",
        status: "User-friendly interfaces.",
        image: "./images/services/slide-3.jpg",
        alt: "UI/UX Design"
    },
    {
        meta: "Service",
        title: "Web Development",
        status: "Build fast websites.",
        image: "./images/services/slide-4.webp",
        alt: "Web Development"
    }
];

const slideMeta = document.getElementById("slide-meta");
const slideTitle = document.getElementById("slide-title");
const slideStatus = document.getElementById("slide-status");
const slideImage = document.getElementById("slide-image");
const leftHalf = document.getElementById("left-half");
const rightHalf = document.getElementById("right-half");
const buttons = document.querySelectorAll("#pagination button");

let serviceCurrentIndex = 0;
let isAnimating = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-slide"));
        if (index === serviceCurrentIndex || isAnimating) return;

        isAnimating = true;

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Animate slide out
        leftHalf.classList.add("slide-out-left");
        rightHalf.classList.add("slide-out-right");

        setTimeout(() => {
            // Update content and image
            slideMeta.textContent = serviceSlides[index].meta;
            slideTitle.innerHTML = serviceSlides[index].title;
            slideStatus.textContent = serviceSlides[index].status;
            slideImage.src = serviceSlides[index].image;
            slideImage.alt = serviceSlides[index].alt;

            // Remove slide out, add slide in
            leftHalf.classList.remove("slide-out-left");
            rightHalf.classList.remove("slide-out-right");
            leftHalf.classList.add("slide-in-left");
            rightHalf.classList.add("slide-in-right");

            setTimeout(() => {
                leftHalf.classList.remove("slide-in-left");
                rightHalf.classList.remove("slide-in-right");
                isAnimating = false;
                serviceCurrentIndex = index;
            }, 600);
        }, 600);
    });
});


//  What we Offer section
// Carousel
$(document).ready(function () {
    $(".services-carousel").owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        nav: true,
        dots: false,
        navText: [
            '<span style="font-size: 24px; color:#007bff;">&#8592;</span>',
            '<span style="font-size: 24px; color:#007bff;">&#8594;</span>',
        ],
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
        },
    });
});

// Our Specialization section
const slidesData = [
    {
        image: "/images/services/vertical-slider/design.jpg",
        title: "Web Design",
        desc1: "Our team creates fully responsive websites designed to perform flawlessly on all devices, including desktops, tablets, and smartphones. We focus on fast loading speeds, intuitive navigation, clear visual hierarchy, and accessibility standards to deliver a smooth and engaging user experience that keeps visitors coming back.",
        desc2: "Whether you need a simple portfolio site or a complex business platform, we approach every project with creativity and strategy. We design visually compelling websites that effectively communicate your brand identity, cater to your target audience, and drive meaningful interactions to help your business grow online."
    },
    {
        image: "/images/services/vertical-slider/graphic.jpg",
        title: "Graphic Design",
        desc1: "We take your ideas and transform them into striking visual designs that not only capture attention but also communicate your brand's core message with clarity and creativity. From designing memorable logos to creating comprehensive marketing materials, our work blends artistic innovation with strategic communication to ensure your brand stands out and leaves a lasting impression on your target audience.",
        desc2: "By carefully balancing detail, color harmony, and visual composition, we craft cohesive and impactful brand identities that distinguish you in competitive markets. Our designs are thoughtfully created to build meaningful connections with your audience, reinforce your brand values, and drive your business objectives through powerful, visually engaging storytelling."
    },
    {
        image: "/images/services/vertical-slider/web-development.jpg",
        title: "Web Development",
        desc1: "Our team specializes in building reliable and highly scalable web applications that are carefully tailored to meet the unique goals and challenges of your business. We place strong emphasis on delivering exceptional performance, implementing robust security measures, and designing intuitive user experiences to ensure your application runs efficiently and securely while delighting your users at every interaction.",
        desc2: "From developing comprehensive e-commerce platforms to creating custom software solutions designed specifically for your needs, we focus on crafting powerful and efficient web presences. Our goal is to drive meaningful engagement, improve operational workflows, and generate measurable business results through innovative technology and thoughtful design."
    },
    {
        image: "/images/services/vertical-slider/marketing.jpg",
        title: "Digital Marketing",
        desc1: "We develop comprehensive digital marketing strategies tailored to connect your brand with the ideal audience. By analyzing market trends and customer behavior, we craft targeted campaigns that increase brand awareness, drive traffic, and generate quality leads, ensuring your marketing efforts deliver measurable results and maximize ROI.",
        desc2: "Our services range from creating engaging social media campaigns to optimizing your website for search engines. We focus on growing your online presence, boosting audience engagement, and building long-term relationships that strengthen your brand's impact in the digital space."
    }
];

let currentSlide = 0;

function showSlide(index) {
    currentSlide = index;
    const slide = slidesData[index]; // ✅ changed from slides[index]
    document.getElementById("mainImage").src = slide.image;
    document.getElementById("titleText").innerHTML = `<i class="fas fa-globe me-2 text-dark"></i>${slide.title}`;
    document.getElementById("desc1").textContent = slide.desc1;
    document.getElementById("desc2").textContent = slide.desc2;

    // Highlight selected thumbnail
    document.querySelectorAll(".thumb-img").forEach((img, idx) => {
        img.classList.toggle("active", idx === index);
    });
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length; // ✅ updated
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slidesData.length; // ✅ updated
    showSlide(currentSlide);
}

// Initial slide load
showSlide(0);


//hero slider
const heroSlides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let heroCurrentIndex = 0;
let autoSlideInterval;

function goToSlide(idx) {
  heroSlides[heroCurrentIndex].classList.remove('active');
  dots[heroCurrentIndex].classList.remove('active');
  heroCurrentIndex = (idx + heroSlides.length) % heroSlides.length;
  heroSlides[heroCurrentIndex].classList.add('active');
  dots[heroCurrentIndex].classList.add('active');
}

function nextSlide() { goToSlide(heroCurrentIndex + 1); }
function prevSlide() { goToSlide(heroCurrentIndex - 1); }

function startAutoSlide() {
  stopAutoSlide(); // Clear any existing interval
  autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
}

// Event Listeners
next.addEventListener('click', () => { 
  nextSlide(); 
  startAutoSlide(); // Restart auto-slide after manual navigation
});

prev.addEventListener('click', () => { 
  prevSlide(); 
  startAutoSlide(); // Restart auto-slide after manual navigation
});

dots.forEach(dot =>
  dot.addEventListener('click', () => {
    goToSlide(parseInt(dot.dataset.index));
    startAutoSlide(); // Restart auto-slide after manual navigation
  })
);

// Start auto-sliding when the page loads
startAutoSlide();

// Optional: Pause auto-sliding when hovering over the slider
document.querySelector('#hero-slider').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('#hero-slider').addEventListener('mouseleave', startAutoSlide);

// Services Page ----------------------------------------------------------------
