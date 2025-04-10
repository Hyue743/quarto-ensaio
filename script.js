window.onscroll = () => {
    const btn = document.getElementById("scrollTopBtn");
    btn.style.display = document.documentElement.scrollTop > 100 ? "block" : "none";
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}