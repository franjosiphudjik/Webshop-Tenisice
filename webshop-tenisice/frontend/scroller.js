const slider = document.getElementById('lista-tenisica-index');

if (slider) {
    const cardWidth = 265; // širina kartice + gap
    const intervalTime = 3000;
    let scrollAmount = 0;
    let autoScroll;

    function startScroll() {
        autoScroll = setInterval(() => {
            scrollAmount += cardWidth;

            if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
                scrollAmount = 0;
            }

            slider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, intervalTime);
    }

    function stopScroll() {     //zaustavlja scroll kod hoveranja
        clearInterval(autoScroll);
    }

    slider.addEventListener('mouseenter', stopScroll);
    slider.addEventListener('mouseleave', startScroll);

    startScroll(); // pokreće scroll odmah
}
