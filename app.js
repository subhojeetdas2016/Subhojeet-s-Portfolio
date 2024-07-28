document.addEventListener("DOMContentLoaded", () => {

    var typed = new Typed(".auto-type", {
        strings: [" @Subhojeet Das", " Front-End Developer", " Back-End Developer"],
        typeSpeed: 70, // Reduce the type speed for smoother effect
        backSpeed: 70, // Reduce the back speed for smoother effect
        startDelay: 500, // Add a delay before typing starts
        backDelay: 500, // Add a delay before backspacing
        loop: true
    });

    const menu_icon = document.querySelector(".menu_icon");
    const side_container = document.querySelector(".side_container");

    menu_icon.addEventListener("click", () => {
        side_container.classList.toggle("active");
        console.log('Menu icon clicked, aside active class toggled.');
    });

    document.addEventListener("click", (e) => {
        if (!menu_icon.contains(e.target) && !side_container.contains(e.target)) {
            side_container.classList.remove("active");
            console.log('Clicked outside, aside active class removed.');
        }
    });

    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Optionally, close the aside menu after clicking a link
            const aside = document.querySelector('.side_container');
            side_container.classList.remove('active');

            // If you need to prevent default navigation and handle manually
            // event.preventDefault();
            // window.location = link.getAttribute('href');

            console.log('Navigating to:', link.getAttribute('href'));
        });
    });

    // for more projects

    let simon = document.querySelector(".simon");

    simon.innerHTML = "Simon Says";
    // for more projects

    // for card paragraph

    let card1 = document.querySelector(".card-1");

    card1.innerHTML = "Refrens Clone"

    let card2 = document.querySelector(".card-2");

    card2.innerHTML = "Airbnb Clone"

    let card3 = document.querySelector(".card-3");

    card3.innerHTML = "Paytm Clone"

    let card4 = document.querySelector(".card-4");

    card4.innerHTML = "Discord Clone"


    // for card paragraph

    const projectcards = document.querySelectorAll('.all-animate');

    const options = {
        threshold: 0.5
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, options);

    projectcards.forEach(projectcards => {
        observer.observe(projectcards);
    });

    const animateElements = document.querySelectorAll('.all-animate');
    animateElements.forEach((el) => observer.observe(el));

});

// skills animation

// document.addEventListener('DOMContentLoaded', function () {

// });

// skills animation




