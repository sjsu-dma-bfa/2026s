// ─── ARTIST DATA ──────────────────────────────────────────────────────────────
// imgX / imgY  = object-position in % (0–100). Default 50 50 = centred.
// imgScale     = zoom multiplier. Default 1.0 = no zoom.
const ARTISTS = [
    { nickname: null, name: "Aryan Advani", title: "Spiraling Madness", subtitle: "Horror Game", imgX: 50, imgY: 65, imgScale: 2.0, img: "assets/artists_portrait/aryan_advani.jpeg", href: "artists/team_spiral.html" },
    { nickname: null, name: "Victoria Arevalo", title: "What You Leave Behind", subtitle: "Choice-Matters CYOA Game", imgX: 50, imgY: 35, imgScale: 1.0, img: "assets/artists_portrait/victoria_arevalo.png", href: "artists/victoria_arevalo.html" },
    { nickname: null, name: "Rhyme Balatbat", title: "SweetHeart: First Batch", subtitle: "3D-printed Figurine Series", imgX: 50, imgY: 9, imgScale: 1.0, img: "assets/artists_portrait/rhyme_balatbat.png", href: "artists/rhyme_balatbat.html" },
    { nickname: null, name: "Julian Cabadas", title: "In Your Head", subtitle: "3D Animation Film made in Blender", imgX: 50, imgY: 15, imgScale: 1.0, img: "assets/artists_portrait/julian_cabadas.jpeg", href: "artists/julian_cabadas.html" },
    { nickname: "SuperBagle", name: "Miguel Cano", title: "Cosmic Eternity Opening", subtitle: "Hypothetical Opening of Animated Series", imgX: 50, imgY: 25, imgScale: 1.0, img: "assets/artists_portrait/juan_jose_cano_garcia.jpg", href: "artists/miguel_cano.html" },
    { nickname: null, name: "Joshua Chan", title: "Spiraling Madness", subtitle: "Horror Game", imgX: 50, imgY: 80, imgScale: 1.5, img: "assets/artists_portrait/joshua_chan.jpeg", href: "artists/team_spiral.html" },
    { nickname: null, name: "Shanglong Chen", title: "Becoming", subtitle: "Video-based Motion Graphic Animation", imgX: 50, imgY: 50, imgScale: 1.0, img: "assets/artists_portrait/shanglong_chen.jpeg", href: "artists/shanglong_chen.html" },
    { nickname: null, name: "Jasmine Cisneros", title: "Hello Gamer!", subtitle: "Web-based Choose-Your-Own-Adventure", imgX: 50, imgY: 20, imgScale: 1.0, img: "assets/artists_portrait/jasmine_cisneros.JPG", href: "artists/jasmine_cisneros.html" },
    { nickname: null, name: "Jared Langner", title: "Hanging In There", subtitle: "Project-based Video Installation", imgX: 50, imgY: 15, imgScale: 1.0, img: "assets/artists_portrait/jared_langner.png", href: "artists/jared_langner.html" },
    { nickname: null, name: "Martin Lanuza", title: "ROOTS", subtitle: "Projection-mapped Painting", imgX: 50, imgY: 40, imgScale: 1.0, img: "assets/artists_portrait/martin_lanuza.png", href: "artists/martin_lanuza.html" },
    { nickname: null, name: "Rodel Laserna", title: "Cubic Ideals", subtitle: "Interactive Cube-like Sculpture", imgX: 50, imgY: 30, imgScale: 1.0, img: "assets/artists_portrait/rodèle_lasérne.jpg", href: "artists/rodel_laserna.html" },
    { nickname: null, name: "Quinn Lee", title: "VAGRANT", subtitle: "Horror-Mystery Visual Novel", imgX: 50, imgY: 30, imgScale: 1.0, img: "assets/artists_portrait/quinn_lee.jpg", href: "artists/quinn_lee.html" },
    { nickname: null, name: "Ashanty Lemus", title: "Path of Possibilities", subtitle: "Web-based Choose-Your-Own-Adventure", imgX: 50, imgY: 30, imgScale: 1.0, img: "assets/artists_portrait/ashanty_lemus.png", href: "artists/ashanty_lemus.html" },
    { nickname: null, name: "Lyndon Livingston", title: "The Story So Far", subtitle: "Autobiographical Game", imgX: 50, imgY: 20, imgScale: 1.0, img: "assets/artists_portrait/lyndon_livingston.png", href:"artists/lyndon_livingston.html" },
    { nickname: null, name: "Quynh Luong", title: "Piracentile", subtitle: "Fantasy Visual Novel", imgX: 50, imgY: 15, imgScale: 1.0, img: "assets/artists_portrait/quynh_luong.jpg", href: "artists/quynh_luong.html" },
    { nickname: "Yan", name: "Yanheng Ma", title: "Love", subtitle: "Biblical 2D Motion Graphic Animation", imgX: 50, imgY: 50, imgScale: 1.0, img: "assets/artists_portrait/yanheng_ma.jpeg", href: "artists/yanheng_ma.html" },
    { nickname: "DerpRex", name: "Catherine Macdonald", title: "Guardian of Artistic Integrity", subtitle: "Mixed Media Painting", imgX: 50, imgY: 50, imgScale: 1.0, img: "assets/artists_portrait/catherine_macdonald.png", href: "artists/catherine_macdonald.html" },
    { nickname: "[etho.png]", name: "Ethan Vilchis Macedo", title: "Spiraling Madness", subtitle: "Horror Game", imgX: 50, imgY: 55, imgScale: 1.0, img: "assets/artists_portrait/ethan_vilchis_macedo.jpeg", href: "artists/team_spiral.html" },
    { nickname: null, name: "David Nguyen", title: "Prehistoric Walk", subtitle: "Projected, Looping Documentary", imgX: 50, imgY: 50, imgScale: 1.0, img: "assets/artists_portrait/david_nguyen.jpg", href: "artists/david_nguyen.html" },
    { nickname: null, name: "Nguyen Nguyen", title: "Magic Evolved", subtitle: "Power Fantasy Game", imgX: 50, imgY: 50, imgScale: 1.0, img: "assets/artists_portrait/nguyen_nguyen.png", href: "artists/nguyen_nguyen.html" },
    { nickname: "Alex", name: "Alexander Rodriguez", title: "My Silly Little Dungeon", subtitle: "Interactive Video Installation in a 3D Environment", imgX: 50, imgY: 50, imgScale: 1.0, img: "assets/artists_portrait/alexander_rodriguez.png", href: "artists/alexander_rodriguez.html" },
    { nickname: "Lizzie Jane", name: "Elizabeth Salinas", title: "To The Land That I Love", subtitle: "Animation Projected over Painting", imgX: 50, imgY: 15, imgScale: 1.0, img: "assets/artists_portrait/elizabeth_salinas.png", href: "artists/elizabeth_salinas.html" },
    { nickname: "Ben", name: "Benjamin Sandoval", title: "Timeless Crossroads", subtitle: "3D Replica viewed in VR", imgX: 50, imgY: 50, imgScale: 1.0, img: "assets/artists_portrait/ben_sandoval.png", href: "artists/benjamin_sandoval.html" },
    { nickname: null, name: "Erick Sandoval", title: "Memory Grove", subtitle: "3D Virtual World", imgX: 50, imgY: 45, imgScale: 1.0, img: "assets/artists_portrait/erick_sandoval.jpg", href: "artists/erick_sandoval.html" },
    { nickname: null, name: "John Joseph Santos", title: "Press Play", subtitle: "Interactive Audiovisual Installation", imgX: 50, imgY: 50, imgScale: 1.0, img: "assets/artists_portrait/john_joseph_santos.JPG", href: "artists/john_joseph_santos.html" },
    { nickname: null, name: "Courtney Spisak", title: "The Myth of Margery", subtitle: "5-minute 3D-animated Short Film", imgX: 50, imgY: 35, imgScale: 1.0, img: "assets/artists_portrait/courtney_spisak.png", href: "artists/courtney_spisak.html" },
    { nickname: null, name: "Emily Stegmeir", title: "Glass House", subtitle: "3D Interactive World", imgX: 50, imgY: 65, imgScale: 1.0, img: "assets/artists_portrait/emily_stegmeir.jpg", href: "artists/emily_stegmeir.html" },
    { nickname: null, name: "Max Takahashi", title: "Data to Noise", subtitle: "~5-minute Video Projection", imgX: 50, imgY: 20, imgScale: 1.0, img: "assets/artists_portrait/max_takahashi.jpg", href: "artists/max_takahashi.html" },
    { nickname: "ParadX", name: "Thierry Tran", title: "Do not turn off this life when you see me...", subtitle: "Autobiographical Video Log Series", imgX: 50, imgY: 35, imgScale: 1.0, img: "assets/artists_portrait/thierry_tran.JPG", href: "artists/thierry_tran.html" },
    { nickname: null, name: "Jingyi Wang", title: "Equinox", subtitle: "Video Installation on Balance", imgX: 50, imgY: 50, imgScale: 1.0, img: "assets/artists_portrait/jingyi_wang.JPG", href: "artists/jingyi_wang.html" },
    { nickname: null, name: "Lea Wilhelmer", title: "Shaped by You", subtitle: "Interactive Digital Project", imgX: 50, imgY: 45, imgScale: 1.0, img: "assets/artists_portrait/lea_wilhelmer.jpeg", href: "artists/lea_wilhelmer.html" },
    { nickname: null, name: "Shirley Zhong", title: "Determined", subtitle: "Short Animation about an Octopus", imgX: 50, imgY: 30, imgScale: 1.0, img: "assets/artists_portrait/shirley_zhong.png", href: "artists/shirley_zhong.html" },
];

// STATE
const N            = ARTISTS.length;
const ROT_PER_STEP = 22;
 
let currentIndex  = 0;
let isAnimating   = false;
let transitioning = false;
 
// ELEMENTS
const cylinder      = document.getElementById('drumCylinder');
const detail        = document.getElementById('artistDetail');
const counter       = document.getElementById('drumCounter');
const overlay       = document.getElementById('shootingStarsOverlay');
const drumContainer = document.getElementById('drumContainer');
 
// BUILD DRUM ITEMS
ARTISTS.forEach((artist, i) => {
    const el         = document.createElement('div');
    el.className     = 'drum-item';
    el.dataset.index = i;
 
    const titleEl         = document.createElement('div');
    titleEl.className     = 'drum-item-title';
    titleEl.textContent   = artist.title;
 
    const subtitleEl       = document.createElement('div');
    subtitleEl.className   = 'drum-item-subtitle drum-item-subtitle--pink';
    subtitleEl.textContent = artist.subtitle;
 
    el.appendChild(titleEl);
    el.appendChild(subtitleEl);
 
    el.addEventListener('click', () => {
        if (transitioning) return;
        i !== currentIndex ? goTo(i) : navigate(i);
    });
 
    cylinder.appendChild(el);
});
 
// DRUM RENDERING
function updateDrum(animate) {
    const items = cylinder.querySelectorAll('.drum-item');
 
    items.forEach((el, i) => {
        let rel = i - currentIndex;
        if (rel >  N / 2) rel -= N;
        if (rel < -N / 2) rel += N;
 
        const angle      = rel * ROT_PER_STEP;
        const rad        = angle * Math.PI / 180;
        const translateY = Math.sin(rad) * 120;
        const translateZ = (Math.cos(rad) - 1) * 80;
        const scale      = Math.cos(rad) * 0.55 + 0.5;
        const opacity    = Math.abs(rel) > 3 ? 0 : (Math.cos(rad) * 0.6 + 0.5);
 
        el.style.transition = animate
            ? 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.35s ease'
            : 'none';
        el.style.transform  = `translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`;
        el.style.opacity    = opacity;
        el.style.zIndex     = Math.round(scale * 10);
        el.classList.toggle('active', i === currentIndex);
    });
 
    counter.textContent = `${currentIndex + 1} / ${N}`;
    updateDetail(currentIndex);
}

function buildLoadingBar() {
    return `
        <div class="artist-loading-wrap">
            <div class="artist-loading-label">
                <span>Loading Artist Data</span>
                <span class="artist-loading-percent">0%</span>
            </div>
            <div class="artist-loading-bar">
                <i></i>
            </div>
        </div>
    `;
}
 
// DETAIL PANEL — NEW RIGHT SIDE ONLY
function updateDetail(idx) {
    const artist = ARTISTS[idx];

    detail.classList.remove('flash');
    void detail.offsetWidth;
    detail.classList.add('flash');

    detail.innerHTML = `
        <div class="artist-star-glow"></div>
        <div class="artist-detail-content">
            <div class="artist-hero">
                <img
                    src="${artist.img}"
                    alt="${artist.name}"
                    loading="lazy"
                    style="object-fit:cover; object-position:${artist.imgX}% ${artist.imgY}%; transform:scale(${artist.imgScale}); transform-origin:${artist.imgX}% ${artist.imgY}%;"
                >
            </div>

            <div class="artist-meta">
                <h2 class="artist-name">${artist.name}</h2>
                <p class="artist-role">${artist.title} • ${artist.subtitle}</p>
                <div class="artist-stats">
                    ${buildLoadingBar()}
                </div>

                <a class="artist-link" href="${artist.href}">Open Artist</a>
            </div>
        </div>
    `;

    animateLoadingBar('reset');

    detail.onmouseenter = () => { if (!transitioning) animateLoadingBar('hover'); };
    detail.onmouseleave = () => { if (!transitioning) animateLoadingBar('reset'); };
    detail.onclick      = () => { if (!transitioning) navigate(idx); };
}
let _loadingInterval = null;

function animateLoadingBar(mode = 'reset') {
    const wrap    = detail.querySelector('.artist-loading-wrap');
    const bar     = detail.querySelector('.artist-loading-bar i');
    const percent = detail.querySelector('.artist-loading-percent');
    if (!wrap || !bar || !percent) return;

    if (_loadingInterval) { clearInterval(_loadingInterval); _loadingInterval = null; }

    if (mode === 'reset') {
        bar.style.width       = '0%';
        percent.textContent   = '0%';
        wrap.classList.remove('is-hovering', 'is-complete');
        return;
    }

    if (mode === 'hover') {
        wrap.classList.remove('is-complete');
        wrap.classList.add('is-hovering');
        let value = parseInt(bar.style.width) || 0;
        _loadingInterval = setInterval(() => {
            value += Math.floor(Math.random() * 12) + 4;
            if (value >= 72) { value = 72; clearInterval(_loadingInterval); _loadingInterval = null; }
            bar.style.width     = `${value}%`;
            percent.textContent = `${value}%`;
        }, 45);
        return;
    }

    if (mode === 'complete') {
        wrap.classList.remove('is-hovering');
        wrap.classList.add('is-complete');
        bar.style.width     = '100%';
        percent.textContent = 'READY';
    }
}
 
// SHATTER TRANSITION
function starPath(cx, cy, outerR, innerR, pts) {
    let d = '';
    for (let k = 0; k < pts * 2; k++) {
        const a = (k * Math.PI / pts) - Math.PI / 2;
        const r = k % 2 === 0 ? outerR : innerR;
        d += (k === 0 ? 'M' : 'L') +
             (cx + Math.cos(a) * r).toFixed(2) + ',' +
             (cy + Math.sin(a) * r).toFixed(2);
    }
    return d + 'Z';
}
 
function navigate(idx) {
    if (transitioning) return;
    const href    = ARTISTS[idx].href;
    transitioning = true;

    animateLoadingBar('complete');
    setTimeout(() => { window.location.href = href; }, 600);
}
 
// NAVIGATION CONTROLS
function goTo(index) {
    if (isAnimating || transitioning) return;
    isAnimating  = true;
    currentIndex = ((index % N) + N) % N;
    updateDrum(true);
    setTimeout(() => { isAnimating = false; }, 360);
}
 
function stepUp()   { goTo(currentIndex - 1); }
function stepDown() { goTo(currentIndex + 1); }
 
document.getElementById('btn-up').addEventListener('click',   stepUp);
document.getElementById('btn-down').addEventListener('click', stepDown);
 
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp')   { e.preventDefault(); stepUp(); }
    if (e.key === 'ArrowDown') { e.preventDefault(); stepDown(); }
    if (e.key === 'Enter')     { navigate(currentIndex); }
});
 
let wheelAccum = 0;
drumContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    wheelAccum += e.deltaY;
    if (Math.abs(wheelAccum) >= 60) {
        wheelAccum > 0 ? stepDown() : stepUp();
        wheelAccum = 0;
    }
}, { passive: false });
 
let touchStartY = 0;
drumContainer.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: true });
drumContainer.addEventListener('touchend', (e) => {
    const dy = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 30) { dy > 0 ? stepDown() : stepUp(); }
}, { passive: true });
 
// INIT
updateDrum(false);
setTimeout(() => {
    cylinder.querySelectorAll('.drum-item').forEach(el => { el.style.transition = ''; });
}, 50);

// Reset all state when browser restores page from back/forward cache
window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
        transitioning = false;
        isAnimating   = false;
        detail.classList.remove('star-expand');
        animateLoadingBar('reset');
        updateDrum(false);
    }
});