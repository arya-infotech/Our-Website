
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

VANTA.GLOBE({
    el: ".background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x40bcfa,
    backgroundColor: 0x4a9d2
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
        desc1: "We take your ideas and transform them into striking visual designs that not only capture attention but also communicate your brand’s core message with clarity and creativity. From designing memorable logos to creating comprehensive marketing materials, our work blends artistic innovation with strategic communication to ensure your brand stands out and leaves a lasting impression on your target audience.",
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
        desc2: "Our services range from creating engaging social media campaigns to optimizing your website for search engines. We focus on growing your online presence, boosting audience engagement, and building long-term relationships that strengthen your brand’s impact in the digital space."
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



// About Page ----------------------------------------------------------------
