// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────

const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
}

function closeLightbox() {
    lightbox.classList.remove('open');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// Make all carousel images open the lightbox on click
document.querySelectorAll('.carousel-track img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

// ─── CAROUSELS ────────────────────────────────────────────────────────────────

document.querySelectorAll('.carousel').forEach(carousel => {
    const track  = carousel.querySelector('.carousel-track');
    const imgs   = track.querySelectorAll('img');
    const dots   = carousel.querySelectorAll('.carousel-dot');
    const btnPrev = carousel.querySelector('.carousel-btn-prev');
    const btnNext = carousel.querySelector('.carousel-btn-next');
    const total  = imgs.length;
    let current  = 0;

    // Single image — no controls needed
    if (total <= 1) {
        if (btnPrev) btnPrev.hidden = true;
        if (btnNext) btnNext.hidden = true;
        return;
    }

    function goTo(idx) {
        current = ((idx % total) + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
        btnPrev.hidden = false;
        btnNext.hidden = false;
    }

    btnPrev.addEventListener('click', () => goTo(current - 1));
    btnNext.addEventListener('click', () => goTo(current + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

    // Touch swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend',   e => {
        const dx = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 40) dx > 0 ? goTo(current + 1) : goTo(current - 1);
    }, { passive: true });

    goTo(0);
});