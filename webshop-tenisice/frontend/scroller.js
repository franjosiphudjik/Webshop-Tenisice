const slider = document.getElementById('lista-tenisica-index');

if (slider) {
    let scrollAmount = 0;
    const cardWidth = 265; // širina tenisice + gap (250 + 15)
    const interval = 3000; // svake 3 sekunde

    setInterval(() => {
        scrollAmount += cardWidth;

        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0; // vrati na početak
        }

        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }, interval);
}

let autoScroll;

function startScroll() {
    autoScroll = setInterval(() => {
        scrollAmount += cardWidth;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0;
        }
        slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, interval);
}

function stopScroll() {
    clearInterval(autoScroll);
}

slider.addEventListener('mouseenter', stopScroll);
slider.addEventListener('mouseleave', startScroll);

startScroll();
